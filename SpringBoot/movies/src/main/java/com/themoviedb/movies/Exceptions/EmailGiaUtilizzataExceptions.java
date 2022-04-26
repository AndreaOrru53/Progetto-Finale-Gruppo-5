package com.themoviedb.movies.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


@ResponseStatus(value = HttpStatus.IM_USED, reason = "E' già presente un utente con questa email!")
public class EmailGiaUtilizzataExceptions extends RuntimeException {
        public EmailGiaUtilizzataExceptions(String email) {
            System.out.println("E' già presente un utente con questa email: " + email + "!");
    }
}

