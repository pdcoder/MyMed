package com.example.demo.model;


public class JwtUser {
    private String userName;
    private long id;
    private String role;
    private String email;
    private String passwordfield;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPasswordfield() {
        return passwordfield;
    }

    public void setPasswordfield(String passwordfield) {
        this.passwordfield = passwordfield;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getUserName() {
        return userName;
    }

    public long getId() {
        return id;
    }

    public String getRole() {
        return role;
    }
}