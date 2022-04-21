package com.themoviedb.movies.Repository;

import com.themoviedb.movies.Model.Users;

import java.util.*;

public class InMemoryDataBase {
    static Map<Integer, Users> utenti = new HashMap<>();
    static int lastIndex = 0;

    public static int addUtente(Users users){
        if(users != null) {
            users.setUser_id(++lastIndex);
            utenti.put(users.getUser_id(), users);
            return 1;
        }
        return 0;
    }


    public static Users getUtenteById(int user_id){
        if(user_id != 0 && user_id > 0) {
            return utenti.get(user_id);
        }
        return null;
    }

    public static Users getUtenteByUserName(String username) {
        if(username != null)  {
            for(Users users : utenti.values() ){
                if (users.getUserename().equals(username)) {
                    return users;
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

    public static Users getUtenteByUserPass(String username, String password) {
        if((username != null) && (password != null) ){
            for(Users users : utenti.values() ){
                if (users.getUserename().equals(username) && users.getPassword().equals(password)){
                    System.out.println("Ok");
                    return users;
                }
            }
        }
        System.out.println( "Utente non registrato o dato inserito non valido!");
        return null;
    }

    public static List<Users> getAllUtenti(){
        Collection<Users> utentiValues =  utenti.values();
        return new ArrayList<>(utentiValues);
    }

    public static Users updateUtente(int user_id, Users user){
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
