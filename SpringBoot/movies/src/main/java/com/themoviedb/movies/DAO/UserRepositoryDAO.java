package com.themoviedb.movies.DAO;

import com.themoviedb.movies.Model.Users;
import org.springframework.data.repository.CrudRepository;

public interface UserRepositoryDAO extends CrudRepository<Users, Integer> {
    Users findUserByUsername(String username);
    Users findByUsernameContainsAndPasswordContains(String username, String password);
    Users findPasswordByUsername(String username);
    Users findById(int utente_id);
}
