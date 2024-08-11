import { Component, OnInit } from '@angular/core';
import { BookResponse, PageResponseBookResponse } from '../../../../services/models';
import { BookService } from '../../../../services/services';
import { Router, RouterModule } from '@angular/router';
import { BookCardComponent } from '../../components/book-card/book-card.component';

@Component({
  selector: 'app-my-books',
  standalone: true,
  imports: [BookCardComponent,RouterModule],
  templateUrl: './my-books.component.html',
  styleUrl: './my-books.component.scss'
})
export class MyBooksComponent implements OnInit {

  bookResponse:PageResponseBookResponse={}
  constructor(private router:Router,
    private bookService : BookService
  ){}
   page=0;
   size=5;
   pages: any = [];

  ngOnInit(): void {
this.findAllBooks();
console.log(this.findAllBooks);
console.log(this.bookResponse.totalPages);


  }
  findAllBooks() {
    this.bookService.findAllBooksByOwner({
      page:this.page,
      size:this.size
    }).subscribe({
      next:(books)=>{
this.bookResponse=books;
console.log(books);
      }
    })
  }
  gotToPage(page: number) {
    this.page = page;
    this.findAllBooks();
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllBooks();
  }

  goToPreviousPage() {
    this.page --;
    this.findAllBooks();
  }

  goToLastPage() {
    this.page = this.bookResponse.totalPages as number - 1;
    this.findAllBooks();
  }

  goToNextPage() {
    this.page++;
    this.findAllBooks();
  }



    get isLastPage() {
      return this.page === this.bookResponse.totalPages as number - 1;
    }
    archiveBook(book: BookResponse) {
      this.bookService.updateArchivedStatus({
        'book-id': book.id as number
      }).subscribe({
        next: () => {
          book.archived = !book.archived;
        }
      });
    }
  
    shareBook(book: BookResponse) {
      this.bookService.updateShareableStatus({
        'book-id': book.id as number
      }).subscribe({
        next: () => {
          book.shareable = !book.shareable;
        }
      });
    }
  
    editBook(book: BookResponse) {
      this.router.navigate(['books', 'manage', book.id]);
    }

}
