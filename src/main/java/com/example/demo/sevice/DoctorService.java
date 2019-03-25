package com.example.demo.sevice;

import com.example.demo.model.Doctor;

import java.util.List;
import java.util.Optional;

public interface DoctorService {
    public List findAll();
    public Optional<Doctor> getDoctor(int id);
}
