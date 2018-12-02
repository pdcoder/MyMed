package com.example.demo.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString @EqualsAndHashCode
public class Medicine {

    @Id
    @GeneratedValue
    private Integer id;
    @NotNull
    @Column(name = "fname")
    private String name;
    @NotNull
    private Float price;
    @NotNull
    @Column(name = "descshort")
    private String desc;
    @Lob
    private String image;
}
