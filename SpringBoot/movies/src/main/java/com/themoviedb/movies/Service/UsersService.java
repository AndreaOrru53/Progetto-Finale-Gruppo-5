package com.themoviedb.movies.Service;

import com.themoviedb.movies.DAO.UserRepositoryDAO;
import com.themoviedb.movies.Model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsersService {

    UserRepositoryDAO userRepositaryDAO;
    @Autowired
    PasswordEncoder encoder;

    @Autowired
    public UsersService(@Qualifier("moviedb") UserRepositoryDAO userRepositaryDAO) {
        this.userRepositaryDAO = userRepositaryDAO;
    }

    public String addUtente(Users users) {
        users.setPassword(encoder.encode(users.getPassword()));
        Users risultato = userRepositaryDAO.save(users);
        if (risultato != null) {
            return "Ok";
        } else {
            return "Errore nel salvataggio dei dati Utente!";
        }
    }


    public Users getUtenteById(int user_id) {
        Users result = userRepositaryDAO.findById(user_id);
        return result;
    }

    public Users getUtenteUsername(String username) {
        Users result = userRepositaryDAO.findUserByUsername(username);
        return result;
    }

    public String getPasswordDaUsername(String username) {
        Users result = userRepositaryDAO.findPasswordByUsername(username);
        return result.getPassword();
    }

    public Users getByUserNameContainsAndPasswordContains(String username, String password) {
        password = encoder.encode(password);
        Users result = userRepositaryDAO.findByUsernameContainsAndPasswordContains(username, password);
        return result;
    }

    public Iterable<Users> getAllUtenti() {
        return userRepositaryDAO.findAll();
    }

    public Users updateUser(int utente_id, Users users) {
        if (users.getUser_id() == 0) {
            users.setUser_id(utente_id);
        }
        Users result = userRepositaryDAO.save(users);
        if (result != null) {
            return result;
        } else {
            System.out.println("Errore nel salvataggio dei dati!");
            return null;
        }
    }

    public String deleteUser(int user_id) {
        Users userRecuperato = userRepositaryDAO.findById(user_id);//.orElse(null);
        if (userRecuperato != null) {
            userRepositaryDAO.deleteById(user_id);
            return "Ok";
        }
        return "Utente non trovato!";

    }
}
