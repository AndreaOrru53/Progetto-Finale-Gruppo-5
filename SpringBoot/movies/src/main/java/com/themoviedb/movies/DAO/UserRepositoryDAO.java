package com.themoviedb.movies.DAO;

import com.themoviedb.movies.Model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepositoryDAO extends CrudRepository<User, Integer> {
    User findUserByUsername(String username);
    User findUserByEmail(String email);
    User findPasswordByUsername(String username);
    User findPasswordByemail(String email);
    User findById(int utente_id);
    Iterable<User> findByUsernameContainsAndPasswordContains(String username, String password);

    Optional<User> findByUsernameOrEmail(String username, String email);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);



}
