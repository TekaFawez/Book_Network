package com.fawez.book_network.user;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

//@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Token {
     @Id
    @GeneratedValue
    private Integer id;
     private  String token;
     private LocalDateTime createdAt;
     private LocalDateTime expiredAt;
     private LocalDateTime validatedAt;
     @ManyToOne
     @JoinColumn(name="userId" ,nullable = false)
     private User user;


}
