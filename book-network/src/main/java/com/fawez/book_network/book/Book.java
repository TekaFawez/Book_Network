package com.fawez.book_network.book;

import com.fawez.book_network.common.BaseEntity;
import com.fawez.book_network.feedBack.Feedback;
import com.fawez.book_network.history.BookTransactionHistory;
import com.fawez.book_network.user.User;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.List;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@SuperBuilder

public class Book extends BaseEntity {

    private String title;
    private String authorName;
    private String isbn;
    private String synopsis;
    private String bookCover;
    private boolean archived;
    private boolean shareable;

//    @ManyToOne
//    @JoinColumn(name = "owner_id")
//    private User owner;
    @OneToMany(mappedBy = "book")
    private List<Feedback> feedbacks;

    @OneToMany(mappedBy = "book")

    private List<BookTransactionHistory> histories;
@Transient
    public double getRate(){
    if(feedbacks==null||feedbacks.isEmpty()){
        return 0.0;
    }
    var rate = feedbacks.stream()
            .mapToDouble(Feedback::getNote).average()
            .orElse(0.0);
    var roundedRate=Math.round(rate*10.0)/10.0;
    return roundedRate;
}

}
