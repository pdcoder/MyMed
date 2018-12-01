package com.example.demo.repository;

import com.example.demo.model.Appointment;
import org.springframework.data.repository.CrudRepository;

public interface AppointmentRepository  extends CrudRepository<Appointment,String> {
}
