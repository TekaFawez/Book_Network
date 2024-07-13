package com.fawez.book_network.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;


@Data
@Builder
public class RegistrationRequest {
    @NotBlank(message ="FirstName is mandatory" )
    private String firstname;
    @NotBlank(message ="LastName is mandatory" )

    private String lastname;
    @NotBlank(message ="Email is mandatory" )
    @Email

    private String email;
    @NotBlank(message ="Password is mandatory" )
    @Size(min=8)

    private String password;

}
