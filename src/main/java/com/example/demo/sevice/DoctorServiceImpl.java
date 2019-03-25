package com.example.demo.sevice;

import com.example.demo.model.Doctor;
import com.example.demo.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Override
    public List findAll() {
        return (List) doctorRepository.findAll();
    }

    public Optional<Doctor> getDoctor(int id) { return doctorRepository.findById(id); }
}
