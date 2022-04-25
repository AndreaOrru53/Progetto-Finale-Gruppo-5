package com.themoviedb.movies.Controller;

import com.themoviedb.movies.Bean.AuthenticationBean;
import com.themoviedb.movies.Exceptions.DatiMancantiExceptions;
import com.themoviedb.movies.Exceptions.UserNotFoundExceptions;
import com.themoviedb.movies.Model.Users;
import com.themoviedb.movies.Service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@RestController
@RequestMapping("/user")
public class LoginController {
    @Autowired
    private UsersService usersService;


    //Utente utente;

    /*public LoginController(UsersService usersService) {
        this.usersService = usersService;
    }*/

    @RequestMapping(value ="/", method = GET)
    public String Benvenuto() {
        return "Benvenuto sul portale The Movie DB";
    }

    @RequestMapping(value ="/username/{username}/password/{password}", method = GET)
    public Users getUserByUserPassword(@PathVariable("username") String username,
                                       @PathVariable("password") String password) {
        if (username.equals(usersService.getUtenteUsername(username)) && password.equals(usersService.getPasswordDaUsername(password))) {
            return usersService.getByUserNameContainsAndPasswordContains(username, password);
        }else{
            throw new UserNotFoundExceptions(username);
        }

    }

    @RequestMapping(value ="/{user_id}", method = GET)
    public Users getUtenteById(@PathVariable("user_id") int user_id) {
        Users utente = usersService.getUtenteById(user_id);
        if(utente == null){
            throw new UserNotFoundExceptions(user_id);
        }else{
            return utente;
        }
    }

    @RequestMapping(value ="/add/", method = POST)
    public String addUtente(@RequestBody Users users) {
        String risultato = "";
         risultato = usersService.addUtente(users);
         if(!risultato.equals("Ok")){
             throw new DatiMancantiExceptions(users);
         }else {
             return "Ok";
         }
    }

    @RequestMapping(value ="/username/{username}", method = GET)
    public Users getUtenteUserName(@PathVariable("username") String username) {
        Users utente = usersService.getUtenteUsername(username);
        if(utente == null){
            throw new UserNotFoundExceptions(username);
        }else{
            return utente;
        }

    }

    @RequestMapping(value = "/all", method = GET)
    public Iterable<Users> getAllUtenti(){
        Iterable<Users> utenti = usersService.getAllUtenti();
        if(utenti == null){
            throw new UserNotFoundExceptions();
        }else {
            return utenti;
        }
    }

    @RequestMapping(value = "/{user_id}", method = PUT)
    public Users updateUser(@PathVariable("user_id") int user_id, @RequestBody Users nuoviDati){
        if(getUtenteById(user_id) == null){
            throw new UserNotFoundExceptions(user_id);
        }else {
            return usersService.updateUser(user_id, nuoviDati);
        }
    }

    @DeleteMapping("/{user_id}")
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
