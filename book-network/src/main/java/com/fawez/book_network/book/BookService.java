package com.fawez.book_network.book;

import com.fawez.book_network.common.PageResponse;
import com.fawez.book_network.exception.OperationNotPermittedException;
import com.fawez.book_network.file.FileStorageService;
import com.fawez.book_network.history.BookTransactionHistory;
import com.fawez.book_network.history.BookTransactionHistoryRepository;
import com.fawez.book_network.user.User;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class BookService {
    public final BookRepository bookRepository;
    public final BookMapper bookMapper;
    public final BookTransactionHistoryRepository bookTransactionHistoryRepository;
    private final FileStorageService fileStorageService;
    public Integer save(BookRequest request, Authentication connectedUser) {
//        User user=((User) connectedUser.getPrincipal());
        Book book=bookMapper.toBook(request);
//        book.setOwner(user);
        return bookRepository.save(book).getId();
    }

    public BookResponse findById(Integer bookId) {
        return bookRepository.findById(bookId)
                .map(bookMapper::toBookResponse)
                .orElseThrow(()-> new EntityNotFoundException("No book Found"));
    }

    public PageResponse<BookResponse> findAllBooks(int page, int size, Authentication connectedUser) {
      //  User user=((User) connectedUser.getPrincipal());
        Pageable pageable= PageRequest.of(page,size, Sort.by("createdDate").descending());
        Page<Book> books=bookRepository.findAllDisabledBooks(pageable,connectedUser.getName());
        List<BookResponse> bookResponses=books.stream().map(
                bookMapper::toBookResponse
        ).toList();


        return new PageResponse<>(bookResponses,
                books.getNumber(),
                books.getSize(),
                books.getTotalElements(),
                books.getTotalPages(),
                books.isFirst(),
                books.isLast());
    }

    public PageResponse<BookResponse> findAllBooksByOwner(int page, int size, Authentication connectedUser) {
      //  User user=((User) connectedUser.getPrincipal());
        Pageable pageable= PageRequest.of(page,size, Sort.by("createdDate").descending());
        Page<Book> books=bookRepository.findAll(BookSpecification.withOwnerId(connectedUser.getName()),pageable);
        List<BookResponse> bookResponses=books.stream().map(
                bookMapper::toBookResponse
        ).toList();


        return new PageResponse<>(bookResponses,
                books.getNumber(),
                books.getSize(),
                books.getTotalElements(),
                books.getTotalPages(),
                books.isFirst(),
                books.isLast());

    }

    public PageResponse<BorrowedBookResponse> findAllBorrowedBooks(int page, int size, Authentication connectedUser) {
        //User user=((User) connectedUser.getPrincipal());
        Pageable pageable= PageRequest.of(page,size, Sort.by("createdDate").descending());
        Page<BookTransactionHistory> bookTransactionHistories=bookTransactionHistoryRepository.findAllBorrowedBooks(pageable,connectedUser.getName());
        List<BorrowedBookResponse> bookResponse=bookTransactionHistories.stream()
                .map(bookMapper::toBorrowedBookResponse)
                .toList();

        return new PageResponse<>(bookResponse,
                bookTransactionHistories.getNumber(),
                bookTransactionHistories.getSize(),
                bookTransactionHistories.getTotalElements(),
                bookTransactionHistories.getTotalPages(),
                bookTransactionHistories.isFirst(),
                bookTransactionHistories.isLast());

    }

    public PageResponse<BorrowedBookResponse> findAllReturnedBooks(int page, int size, Authentication connectedUser) {
//        User user = ((User) connectedUser.getPrincipal());
        Pageable pageable = PageRequest.of(page, size, Sort.by("createdDate").descending());
        Page<BookTransactionHistory> bookTransactionHistories = bookTransactionHistoryRepository.findAllReturnedBooks(pageable, connectedUser.getName());
        List<BorrowedBookResponse> bookResponse = bookTransactionHistories.stream()
                .map(bookMapper::toBorrowedBookResponse)
                .toList();

        return new PageResponse<>(bookResponse,
                bookTransactionHistories.getNumber(),
                bookTransactionHistories.getSize(),
                bookTransactionHistories.getTotalElements(),
                bookTransactionHistories.getTotalPages(),
                bookTransactionHistories.isFirst(),
                bookTransactionHistories.isLast());
    }

    public Integer updateShareableStatus(Integer bookId, Authentication connectedUser) {
        Book book =bookRepository.findById(bookId)
                .orElseThrow(()-> new EntityNotFoundException("book not found"+bookId));
        //User user = ((User) connectedUser.getPrincipal());
//        if(!Objects.equals(book.getOwner().getId(),user.getId())){
        if(!Objects.equals(book.getCreatedBy(),connectedUser.getName())){
            //connectedUser.getName()) well return the ID from the keycloak
            throw new OperationNotPermittedException("You cannot update others books shareable status");
        }
        book.setShareable(!book.isShareable());
        return bookId;

    }

    public Integer updateArchivedStatus(Integer bookId, Authentication connectedUser) {
        Book book =bookRepository.findById(bookId)
                .orElseThrow(()-> new EntityNotFoundException("book not found"+bookId));
//        User user = ((User) connectedUser.getPrincipal());
//        if(!Objects.equals(book.getOwner().getId(),user.getId())){
        if(!Objects.equals(book.getCreatedBy(),connectedUser.getName())){
            //throw an exception
            throw new OperationNotPermittedException("You cannot update others books archived status");
        }
        book.setArchived(!book.isArchived());
        return bookId;
    }

    public Integer borrowBook(Integer bookId, Authentication connectedUser) {
        Book book=bookRepository.findById(bookId)
                .orElseThrow(()-> new EntityNotFoundException("book not found"+bookId));
        if(book.isArchived()||!book.isShareable()){
            throw new OperationNotPermittedException("the request book can not borrowed since it archived or not shareable");
        }
//        User user = ((User) connectedUser.getPrincipal());
//        if(Objects.equals(book.getOwner().getId(),user.getId())){
        if(!Objects.equals(book.getCreatedBy(),connectedUser.getName())){
            throw new OperationNotPermittedException("You cannot borrow your owen book");
        }
        final boolean isAlreadyBorrowed=bookTransactionHistoryRepository.isAlreadyBorrowedByUser(bookId,connectedUser.getName());
        if(isAlreadyBorrowed){
            throw new OperationNotPermittedException("book already borrowed");


        }
        BookTransactionHistory bookTransactionHistory = BookTransactionHistory.builder()
                .userId(connectedUser.getName())
                .book(book)
                .returned(false)
                .returnApproved(false)
                .build();
        return bookTransactionHistoryRepository.save(bookTransactionHistory).getId();

    }

    public Integer returnBorrowBook(Integer bookId, Authentication connectedUser) {
        Book book=bookRepository.findById(bookId)
                .orElseThrow(()-> new EntityNotFoundException("book not found"+bookId));
        if(book.isArchived()||!book.isShareable()){
            throw new OperationNotPermittedException("the request book can not borrowed since it archived or not shareable");
        }
//        User user = ((User) connectedUser.getPrincipal());
//        if(Objects.equals(book.getOwner().getId(),user.getId())){
        if(Objects.equals(book.getCreatedBy(),connectedUser.getName())){

            //throw an exception
            throw new OperationNotPermittedException("You cannot borrow or return your owen book");
        }

        BookTransactionHistory bookTransactionHistory=bookTransactionHistoryRepository.findByBookIdAndUserId(bookId, connectedUser.getName())
                .orElseThrow(()->new OperationNotPermittedException("you did not borrow this book"));
         bookTransactionHistory.setReturned(true);
         return bookTransactionHistoryRepository.save(bookTransactionHistory).getId();

    }

    public Integer approveReturnBorrowBook(Integer bookId, Authentication connectedUser) {
        Book book=bookRepository.findById(bookId)
                .orElseThrow(()-> new EntityNotFoundException("book not found"+bookId));
        if(book.isArchived()||!book.isShareable()){
            throw new OperationNotPermittedException("the request book can not borrowed since it archived or not shareable");
        }
//        User user = ((User) connectedUser.getPrincipal());
//        if(!Objects.equals(book.getOwner().getId(),user.getId())){
        if(Objects.equals(book.getCreatedBy(),connectedUser.getName())){

            //throw an exception
            throw new OperationNotPermittedException("You cannot  return a book that you do not own");
        }
        BookTransactionHistory bookTransactionHistory=bookTransactionHistoryRepository.findByBookIdAndOwnerId(bookId, connectedUser.getName())
                .orElseThrow(()->new OperationNotPermittedException("you can't return Approved is not returned yet"));
        bookTransactionHistory.setReturnApproved(true);
        return bookTransactionHistoryRepository.save(bookTransactionHistory).getId();


    }

    public void uploadCoverBookPicture(MultipartFile file, Authentication connectedUser, Integer bookId) {
        Book book=bookRepository.findById(bookId)
                .orElseThrow(()-> new EntityNotFoundException("book not found"+bookId));

//        User user = ((User) connectedUser.getPrincipal());

        var bookCover=fileStorageService.saveFile(file,connectedUser.getName());
        book.setBookCover(bookCover);
        bookRepository.save(book);
    }
}
