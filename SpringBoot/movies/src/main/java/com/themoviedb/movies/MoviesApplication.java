package com.themoviedb.movies;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;



@SpringBootApplication
public class MoviesApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoviesApplication.class, args);

	}



	/**
	 * Ricordate di creare il DataBase con nome 'moviedb'
	 * una volta creato scheda SQL e copiate il codice qui sotto.
	 * esegui e poi potere avviare l' applicazione


	  create table users(
	  	username varchar(50) not null primary key,
	  	password varchar(500) not null,
	  	enabled boolean not null
	  );

	  create table authorities (
	  	username varchar(50) not null,
	  	authority varchar(50) not null,
	  	constraint fk_authorities_users foreign key(username) references users(username)
	  );
	  create unique index ix_auth_username on authorities (username,authority);

	 */

}
