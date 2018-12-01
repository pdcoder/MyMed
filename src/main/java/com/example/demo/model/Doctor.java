package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Doctor {

    @Id
    private Long id;

    @NotNull
    private String name;

    @NotNull
    private String visit;


    private String status;


}
