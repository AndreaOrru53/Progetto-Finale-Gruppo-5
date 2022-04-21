package com.themoviedb.movies.Security;

import com.themoviedb.movies.Model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.Column;
import javax.sql.DataSource;
@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    DataSource dataSource;
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication()
                .dataSource(this.dataSource)
                /* .usersByUsernameQuery("select username,password,enabled "
                 + "from utente "
                 + "where username = ?")
                 .authoritiesByUsernameQuery("select username,authority "
                 + "from ruolo "
                 + "where username = ?")*/
                /* crea tabelle user e authorities */
                .withUser("user")
                .password(passwordEncoder.encode("password"))
                .roles("USER")
                .and()
                .withUser("admin")
                .password(passwordEncoder.encode("admin"))
                .roles("ADMIN");


        auth.inMemoryAuthentication()
                .withUser("user")
                .password(passwordEncoder.encode("password"))
                .roles("USER")
                .and()
                .withUser("admin")
                .password(passwordEncoder.encode("admin"))
                .roles("ADMIN");

    }

    @Bean
    PasswordEncoder passwordEncoder(){
        return passwordEncoder;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().
                disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.GET, "/user/*")
                .hasAnyRole("USER","ADMIN")
                .antMatchers(HttpMethod.POST, "/user/*")
                .hasAnyRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "/user/*")
                .hasAnyRole("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/user/*")
                .hasAnyRole("ADMIN")
                .anyRequest()
                .authenticated()
                .and()
                .httpBasic();

        http
                .authorizeRequests().antMatchers("/", "/home").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/login")
                .permitAll()
                .and()
                .logout()
                .permitAll();
    }

   /* @Bean
    @Override
    public UserDetailsService userDetailsService(){
        UserDetails users =
                Users.withDefaultPasswordEncorder()
                        .username("username")
                        .password("password")
                        .role("USER")
                        .build();
        return newInMemoryUserDetailsManager(user);
    }*/

}
