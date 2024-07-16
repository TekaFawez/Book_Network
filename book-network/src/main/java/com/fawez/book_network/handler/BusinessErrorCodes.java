package com.fawez.book_network.handler;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum BusinessErrorCodes {
    NO_CODE(0,HttpStatus.NOT_IMPLEMENTED,"No Code"),
    INCORRECT_CURRENT_PASSWORD(300,HttpStatus.BAD_REQUEST,"Current password is incorrect"),
    NEW_CURRENT_DOES_NOT_MATCH(301,HttpStatus.BAD_REQUEST,"New password DOES Not Match"),

    ACCOUNT_LOCKED(302,HttpStatus.FORBIDDEN,"Account is locked"),
    ACCOUNT_DISABLED(303,HttpStatus.FORBIDDEN,"Account is Disable"),
    BAD_CREDENTIALS(304,HttpStatus.FORBIDDEN,"Login and / or password is incorrect"),



    ;
    private final int code;
    private final String description;
    private final HttpStatus httpStatus;

    BusinessErrorCodes(int code, HttpStatus httpStatus, String description) {
        this.code = code;
        this.description = description;
        this.httpStatus = httpStatus;
    }
}
