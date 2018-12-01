package com.example.demo.model;


import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Appointment {

    @Id
    private Long id;

    @ManyToMany
    private Set<Doctor> doctor = new HashSet<Doctor>();;

    @ManyToOne
    private Long user_id;

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

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
