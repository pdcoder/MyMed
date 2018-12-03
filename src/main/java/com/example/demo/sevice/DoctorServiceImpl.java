package com.example.demo.sevice;

import com.example.demo.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Override
    public List findAll() {
        return (List) doctorRepository.findAll();
    }
}
