package com.example.demo.model;


import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class Appointment {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToMany
    @JoinColumn(name = "doctor_id",nullable = false)
    private Set<Doctor> doctor ;

    @OneToOne
    @JoinColumn(name = "user_id",nullable = false)
    private User user;

    private String date;

}
