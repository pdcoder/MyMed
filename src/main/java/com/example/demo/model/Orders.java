package com.example.demo.model;

import lombok.*;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class Orders {

    @Id
    @GeneratedValue
    private Long id;

    private Date date;
    private Time time;

    private String status;

    @ManyToMany
    private Set<Medicine> medicine;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
