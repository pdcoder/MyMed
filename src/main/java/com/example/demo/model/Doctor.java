package com.example.demo.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Set;

@Entity
@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class Doctor {

    @Id
    private Long id;

    @NotNull
    private String name;

    @NotNull
    private String visit;

    private String speciality;

    private String status;

    private String description;

    @ElementCollection
    private List<AppointmentDate> apptdate;

    @ManyToMany(mappedBy = "doctor")
    private Set<Appointment> appointments;

}
