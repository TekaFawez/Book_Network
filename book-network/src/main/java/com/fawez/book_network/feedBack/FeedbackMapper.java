package com.fawez.book_network.feedBack;

import com.fawez.book_network.book.Book;

import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class FeedbackMapper {
    public Feedback toFeedback(FeedbackRequest request) {
        return Feedback.builder()
                .note(request.note())
                .comment(request.comment())
                .book(Book.builder().id(request.bookId()).build())
                .build();

    }

    public FeedbackResponse toFeedBackResponse(Feedback feedback, Integer id) {
        return FeedbackResponse.builder()
                .comment(feedback.getComment())
                .note(feedback.getNote())
                .ownFeedback(Objects.equals(feedback.getCreatedBy(),id))
                .build();
    }
}
