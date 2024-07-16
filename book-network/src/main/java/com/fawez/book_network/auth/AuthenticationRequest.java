package com.fawez.book_network.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AuthenticationRequest {
    @NotBlank(message ="Email is mandatory" )
    @Email(message = "Email is not Formatted")
    private String email;
    @NotBlank(message ="Password is mandatory" )
    @Size(min=8)

    private String password;
}
