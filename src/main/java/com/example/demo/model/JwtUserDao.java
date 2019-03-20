package com.example.demo.model;

public class JwtUserDao {
    private long id;
    private String role;
    private String passwordfield;
    private String email;
    private String username;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPasswordfield() {
        return passwordfield;
    }

    public void setPasswordfield(String passwordfield) {
        this.passwordfield = passwordfield;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
