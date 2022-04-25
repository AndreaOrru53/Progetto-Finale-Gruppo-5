package com.themoviedb.movies.Controller;

import com.themoviedb.movies.Bean.AuthenticationBean;
import org.springframework.web.bind.annotation.GetMapping;

public class BasicAuthController {

    @GetMapping(path = "/basicauth")
    public AuthenticationBean movieBean(){
        return new AuthenticationBean("You are logged-in");
    }
}
