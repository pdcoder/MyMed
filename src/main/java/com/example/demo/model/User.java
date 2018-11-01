package com.example.demo.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class User {

    @Id
    private Long id;
    private String fname;
    private String lname;
    private String password;
    private String email;


}
