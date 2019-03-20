package com.example.demo.model;


import javax.persistence.*;
import java.util.Set;

@Entity
public class Appointment {

    @Id
    private Long id;

    @ManyToMany
    @JoinColumn(name = "doctor_id",nullable = false)
    private Set<Doctor> doctor ;

    @ManyToOne
    @JoinColumn(name = "user_id",nullable = false)
    private User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    private String date;



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<Doctor> getDoctor() {
        return doctor;
    }

    public void setDoctor(Set<Doctor> doctor) {
        this.doctor = doctor;
    }



    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
