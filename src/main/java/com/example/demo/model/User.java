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
    @Size(min = 4, message = "Minimum Length should be 6")
    private String passwordfield;
    @NotNull(message = "Cannot be empty")
    private String email;

    private Boolean isActive;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private VerificationToken verificationToken;

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

    public Boolean getIsActive() {
        return isActive;
    }

    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
    }

    public VerificationToken getVerificationToken() {
        return verificationToken;
    }

    public void setVerificationToken(VerificationToken verificationToken) {
        this.verificationToken = verificationToken;
    }
}
