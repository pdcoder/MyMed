package com.example.demo.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Set;


@Entity
@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
@NoArgsConstructor
@ToString
@EqualsAndHashCode
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


}