package com.themoviedb.movies.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.NOT_FOUND, reason = "Nessun utente trovato!")
public class UserNotFoundExceptions extends RuntimeException{
    public UserNotFoundExceptions(String username){
        System.out.println("Nessun Utente trovato con nome " + username + "!");
    }
    public UserNotFoundExceptions(){
        System.out.println("Nessun Utente trovato!");
    }
    public UserNotFoundExceptions(int user_id){
        System.out.println("Nessun Utente trovato con id: " + user_id + "!");
    }
}
