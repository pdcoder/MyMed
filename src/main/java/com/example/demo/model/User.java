package com.example.demo.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String fname;

    @Column(name = "password")
    @NotNull
    @Size(min = 6, message = "Minimum Length should be 4")
    private String passwordfield;
    @NotNull(message = "Cannot be empty")
    private String email;

    public User( String fname, @NotNull @Size(min = 6, message = "Minimum Length should be 4") String passwordfield, @NotNull(message = "Cannot be empty") String email) {
       super();
        this.fname = fname;
        this.passwordfield = passwordfield;
        this.email = email;
    }

    public String getPasswordfield() {
        return passwordfield;
    }

    public void setPasswordfield(String passwordfield) {
        this.passwordfield = passwordfield;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
