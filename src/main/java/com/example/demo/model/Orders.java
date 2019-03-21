package com.example.demo.model;

import lombok.*;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Set;

@Entity
@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class Orders {

    @Id
    @GeneratedValue
    private Long id;

    @ElementCollection
    private List<String> names;

    @ElementCollection
    private List<Integer> qty;

    private String dateOrder;

    private  String timeOrder;

    private float sum;

    private String status;

    private  String email;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
