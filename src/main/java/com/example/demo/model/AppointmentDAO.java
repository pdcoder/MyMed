package com.example.demo.model;

import lombok.*;

@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class AppointmentDAO {

    private int id;

    private int docid;

    private String email;

    private String date;


}
