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
@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class Orders {

    Date dates = new Date();
    DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
    DateFormat timeFormat = new SimpleDateFormat("HH:mm:ss");

    @Id
    @GeneratedValue
    private Long id;

    @Builder.Default
    private String date = dateFormat.format(dates);

    @Builder.Default
    private String time = timeFormat.format(dates);

    @ElementCollection
    private List<String> names;

    @ElementCollection
    private List<Integer> qty;

    private Float total;

    private String status;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
