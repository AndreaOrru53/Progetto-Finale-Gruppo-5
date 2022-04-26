package com.themoviedb.movies.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.IM_USED, reason = "E' già presente un utente con questa username!")
public class UsernameGiaPresenteExceptions extends RuntimeException {
        public UsernameGiaPresenteExceptions(String username) {
            System.out.println("E' già presente un utente con questa username: " + username + "!");
        }
}
