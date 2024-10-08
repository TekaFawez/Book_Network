package com.fawez.book_network.history;

import com.fawez.book_network.book.Book;
import com.fawez.book_network.common.BaseEntity;
import com.fawez.book_network.user.User;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@SuperBuilder
public class BookTransactionHistory extends BaseEntity {
//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    private User user;
    @Column(name="user_id")
    private String userId;
    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;
    private boolean returned;
    private boolean returnApproved;
}
