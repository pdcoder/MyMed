package com.example.demo.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Set;


@Entity
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Size(max = 40)
    private String fname;

    @Size(max = 15)
    private String username;

    @Size(max = 40)
    private String email;

    @Size(max = 100)
    private String passwordfield;

    private String role;

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    private Set<Appointment> appointments;

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    private Set<Orders> orders;

    @OneToOne(cascade = CascadeType.ALL)
    private Cart cart;

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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Set<Appointment> getAppointments() {
        return appointments;
    }

    public void setAppointments(Set<Appointment> appointments) {
        this.appointments = appointments;
    }

    public Set<Orders> getOrders() {
        return orders;
    }

    public void setOrders(Set<Orders> orders) {
        this.orders = orders;
    }

    public Cart getCart() {
        return cart;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }
}