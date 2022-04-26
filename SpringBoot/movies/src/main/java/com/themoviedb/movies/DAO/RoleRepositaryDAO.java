package com.themoviedb.movies.DAO;

import com.themoviedb.movies.Model.Role;
import org.springframework.data.repository.CrudRepository;
//import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepositaryDAO extends CrudRepository<Role, Integer> {

    Optional<Role> findByName(String name);
}
