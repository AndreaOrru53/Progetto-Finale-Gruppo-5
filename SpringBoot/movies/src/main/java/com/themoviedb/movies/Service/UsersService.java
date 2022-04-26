package com.themoviedb.movies.Service;

import com.themoviedb.movies.DAO.UserRepositoryDAO;
import com.themoviedb.movies.Exceptions.UserNotFoundExceptions;
import com.themoviedb.movies.Model.Role;
import com.themoviedb.movies.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;



@Service
public class UsersService implements UserDetailsService {

    @Autowired
    private UserRepositoryDAO userRepositaryDAO;

    @Autowired
    PasswordEncoder passwordEncoder;

   @Autowired
    public UsersService( UserRepositoryDAO userRepositaryDAO) {   //@Qualifier("moviedb")
        this.userRepositaryDAO = userRepositaryDAO;
    }

    @Override
    public UserDetails loadUserByUsername(String usernameOrEmail) throws UserNotFoundExceptions{
        User user = userRepositaryDAO.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail).orElseThrow(()->new UserNotFoundExceptions(usernameOrEmail));
        return new org.springframework.security.core.userdetails.User(user.getEmail(),
                user.getPassword(), mapRolesToAuthorities(user.getRoles()));
    }

    private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Set<Role> roles){
        return roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
    }

    public Boolean existsByUsername(String username){
        if(userRepositaryDAO.findPasswordByUsername(username) != null) {
            return true;
        }
        return false;
    }




    public User getUtenteById(int user_id) {
        return  userRepositaryDAO.findById(user_id);
        // result;
    }

    public User getUtenteByUsername(String username) {
        User result = userRepositaryDAO.findUserByUsername(username);
        if (result != null) {
            return result;
        } else {
            System.out.println("Nessun Utente con questo nome registrato");
            return null;
        }
    }



    public String getPasswordDaUsername(String username) {
        User result = userRepositaryDAO.findPasswordByUsername(username);

        return result.getPassword();
    }



    @Autowired
    //@Qualifier("authenticationManager")
    private AuthenticationManager authenticationManager;


    public ResponseEntity<String> findByUsernameContainsAndPasswordContains(String username, String password) {
        Iterable<User> utente = null;
        String pass = "";
        User userLoggato;
        if(userRepositaryDAO.existsByEmail(username)){
            pass = userRepositaryDAO.findPasswordByemail(username).getPassword();
            userLoggato = userRepositaryDAO.findUserByEmail(username);
        }else if(userRepositaryDAO.existsByUsername(username)){
            pass = userRepositaryDAO.findPasswordByUsername(username).getPassword();
            userLoggato = userRepositaryDAO.findUserByUsername(username);
        }

        if (passwordEncoder.matches(password,pass))  {
            utente = userRepositaryDAO.findByUsernameContainsAndPasswordContains(username, pass);

            System.out.println("Utente trovato:\n User: " + username + "\n password: " + password);

            //Credo non vada su LocalHost
         /*   Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    username, pass));
            SecurityContextHolder.getContext().setAuthentication(authentication);*/

            return new ResponseEntity<>("Utente registrato correttamente.", HttpStatus.OK);

        }else{
            System.out.println("Utente non trovato o password non corrispondente");
            return new ResponseEntity<>("Utente non trovato.", HttpStatus.BAD_REQUEST);
        }

    }

    public Iterable<User> getAllUtenti() {
        return userRepositaryDAO.findAll();
    }

    public User updateUser(int utente_id, User user) {
        if (user.getUser_id() == 0) {
            user.setUser_id(utente_id);
        }
        User result = userRepositaryDAO.save(user);
        if (result != null) {
            return result;
        } else {
            System.out.println("Errore nel salvataggio dei dati!");
            return null;
        }
    }

    public String deleteUser(int user_id) {
        User userRecuperato = userRepositaryDAO.findById(user_id);//.orElse(null);
        if (userRecuperato != null) {
            userRepositaryDAO.deleteById(user_id);
            return "Ok";
        }
        return "Utente non trovato!";

    }
}
