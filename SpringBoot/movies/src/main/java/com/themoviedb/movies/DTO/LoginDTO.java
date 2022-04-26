package com.themoviedb.movies.DTO;

import lombok.Data;

@Data
public class LoginDTO {


    private int user_id;
    private String usernameOrEmail;
    private String password;

    public int getUser_id() { return user_id; }
    public String getUsernameOrEmail() { return usernameOrEmail; }

    public String getPassword() {
        return password;
    }

}
