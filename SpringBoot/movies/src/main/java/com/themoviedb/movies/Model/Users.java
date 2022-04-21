package com.themoviedb.movies.Model;


import javax.persistence.*;

@Entity
@Table(name="users")
public class Users {
   @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id", nullable = false)
    private int user_id;

    @Column(unique = true)
    private String username;
    private String password;
    @Column(unique = true)
    private String email;
    @Column
    private boolean enabled;

    public int getUser_id() {
        return user_id;
    }

   /* public void setUser_id(int user_id) {
        this.user_id = user_id;
    }*/

    public Users() {
    }

    public String getUserename() {
        return username;
    }

    public String getPasswordDaUsername(String username) {
        return password;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    @Override
    public String toString() {
        return "User(" +
                "Username: " + this.username +"\n" +
                "Password: " + this.password +"\n" +
                "Email: " + this.email + ")";
    }
}