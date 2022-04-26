package com.themoviedb.movies.Controller;

import com.themoviedb.movies.DAO.RoleRepositaryDAO;
import com.themoviedb.movies.DAO.UserRepositoryDAO;
import com.themoviedb.movies.DTO.LoginDTO;
import com.themoviedb.movies.DTO.SignupDTO;
import com.themoviedb.movies.Exceptions.DatiMancantiExceptions;
import com.themoviedb.movies.Exceptions.UserNotFoundExceptions;
import com.themoviedb.movies.Model.Role;
import com.themoviedb.movies.Model.User;
import com.themoviedb.movies.Service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/user")
//@Controller
public class UserController {
    @Autowired
    private UsersService usersService;

    @Autowired
    //@Qualifier("authenticationManager")
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepositoryDAO userRepositoryDAO;

    @Autowired
    private RoleRepositaryDAO roleRepositaryDAO;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserController(UsersService usersService) {
        this.usersService = usersService;
    }

//CRUD operations
    @GetMapping("/signin")
    @ResponseBody
    public ResponseEntity<String> findByUsernameContainsAndPasswordContains(@RequestBody LoginDTO loginDto) {
        return usersService.findByUsernameContainsAndPasswordContains(loginDto.getUsernameOrEmail(), loginDto.getPassword());
    }



    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignupDTO signupDTO){
        if(usersService.existsByUsername(signupDTO.getUsername())){
            return new ResponseEntity<>("Username già presente!", HttpStatus.BAD_REQUEST);
        }
        if(usersService.existsByUsername(signupDTO.getEmail())){
            return new ResponseEntity<>("Email già presente!", HttpStatus.BAD_REQUEST);
        }
        User user = new User();
        user.setUsername(signupDTO.getUsername());
        user.setEmail(signupDTO.getEmail());
        user.setPassword(passwordEncoder.encode(signupDTO.getPassword()));
        user.setEnabled(signupDTO.getEnabled());

        Role roles = roleRepositaryDAO.findByName(signupDTO.getRole()).get();
        user.setRoles(Collections.singleton(roles));

        userRepositoryDAO.save(user);
        return new ResponseEntity<>("Utente Registrato correttamente.", HttpStatus.OK);
    }


    @RequestMapping(value ="/getById/{user_id}", method = GET)
    public User getUtenteById(@PathVariable("user_id") int user_id) {
        User utente = usersService.getUtenteById(user_id);
        if(utente == null){
            throw new UserNotFoundExceptions(user_id);
        }else{
            return utente;
        }
    }


    @RequestMapping(value ="/getbyusername/{username}", method = GET)
    public User getUtenteByUserName(@PathVariable("username") String username) {
       User utente = usersService.getUtenteByUsername(username);
        if(utente == null){
            throw new UserNotFoundExceptions(username);
        }else{
            return utente;
        }
    }

    @RequestMapping(value ="/getPassByUsername/{username}", method = GET)
    public String getPasswordByUserName(@PathVariable("username") String username) {
        String pass = usersService.getPasswordDaUsername(username);
        if(pass == null){
            throw new UserNotFoundExceptions(username);
        }else{
            return pass;
        }

    }

    @RequestMapping(value = "/all", method = GET)
    public Iterable<User> getAllUtenti(){
        Iterable<User> utenti = usersService.getAllUtenti();
        if(utenti == null){
            throw new UserNotFoundExceptions();
        }else {
            return utenti;
        }
    }

    @RequestMapping(value = "/update/{user_id}", method = PUT)
    public User updateUser(@PathVariable("user_id") int user_id, @RequestBody User nuoviDati){
        if(getUtenteById(user_id) == null){
            throw new UserNotFoundExceptions(user_id);
        }else {
            return usersService.updateUser(user_id, nuoviDati);
        }
    }

    @DeleteMapping("/delete/{user_id}")
    public String deleteUser(@PathVariable("user_id") int user_id) {
        String risultato = "";
        risultato = usersService.deleteUser(user_id);
        if (!risultato.equals("Ok")) {
            throw new UserNotFoundExceptions(user_id);
        } else {
            return usersService.deleteUser(user_id);
        }
    }


}
