package com.example.demo.repository;

import com.example.demo.model.Doctor;
import org.springframework.data.repository.CrudRepository;

public interface DoctorRepository extends CrudRepository<Doctor,Long> {
}
