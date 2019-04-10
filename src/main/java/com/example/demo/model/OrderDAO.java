package com.example.demo.model;

import lombok.*;

@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class OrderDAO {
    private String names;

    private String date;

    private String time;

    private int sum;
}
