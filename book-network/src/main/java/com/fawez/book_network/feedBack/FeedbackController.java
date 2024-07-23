package com.fawez.book_network.feedBack;

import com.fawez.book_network.common.PageResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/feedback")
@RequiredArgsConstructor
@Tag(name="Feedback")
public class FeedbackController {
    private final FeedbackService service;
    @PostMapping
    public ResponseEntity<Integer> saveFeedback(
           @Valid @RequestParam FeedbackRequest request,
           Authentication connectedUser

    ){
       return ResponseEntity.ok(service.save(request,connectedUser));
    }
    @GetMapping("/book/{book-id}")
    public ResponseEntity<PageResponse<FeedbackResponse>>  findAllFeedbacksByBook(

            @PathVariable("book-id") Integer bookId,
            @RequestParam(name = "page",value = "0",required = false)int page,
            @RequestParam(name = "page",value = "0",required = false) int size,
            Authentication connectedUser
    ){
        return ResponseEntity.ok(service.findAllFeedbacksByBook(bookId,page,size,connectedUser));
    }
}
