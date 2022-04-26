package com.themoviedb.movies.Repository;

import com.themoviedb.movies.Model.User;

import java.util.*;

public class InMemoryDataBase {
    static Map<Integer, User> utenti = new HashMap<>();
    static int lastIndex = 0;

    public static int addUtente(User user){
        if(user != null) {
            user.setUser_id(++lastIndex);
            utenti.put(user.getUser_id(), user);
            return 1;
        }
        return 0;
    }


    public static User getUtenteById(int user_id){
        if(user_id > 0) {
            return utenti.get(user_id);
        }
        return null;
    }

    public static User getUtenteByUserName(String username) {
        if(username != null)  {
            for(User user : utenti.values() ){
                if (user.getUserename().equals(username)) {
                    return user;
                }
            }
        }
        return null;
    }

  /* public static String getPasswordDaUsername(String username) {
        if (username != null) {
            for (Utente utente : utenti.values()) {
                if (utente.getUtenteByUserName(username).equals(username)) {
                    return utente.getPassword();
                }
            }
        }
        return "Utente non registrato o dato inserito non valido!";
    }*/

    public static User getUtenteByUserPass(String username, String password) {
        if((username != null) && (password != null) ){
            for(User user : utenti.values() ){
                if (user.getUserename().equals(username) && user.getPassword().equals(password)){
                    System.out.println("Ok");
                    return user;
                }
            }
        }
        System.out.println( "Utente non registrato o dato inserito non valido!");
        return null;
    }

    public static List<User> getAllUtenti(){
        Collection<User> utentiValues =  utenti.values();
        return new ArrayList<>(utentiValues);
    }

    public static User updateUtente(int user_id, User user){
        if(user_id > 0) {
            user.setUser_id(user_id);
            utenti.put(user_id, user);
            return user;
        }else {
            return null;
        }
    }

    public static String deleteUser(int user_id) {
        if(user_id > 0) {
            utenti.remove(user_id);
            System.out.println("Utente con ID: " +  user_id + " rimosso con successo!");
            return "OK";
        }
        return "Errore nella rimozione dell' utente con ID: " + user_id + "!";
    }
}
