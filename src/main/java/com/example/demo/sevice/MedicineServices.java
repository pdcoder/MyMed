package com.example.demo.sevice;

import com.example.demo.model.Medicine;

import java.util.List;
import java.util.Optional;

public interface MedicineServices {
    public Medicine create(Medicine medicine);
    public Medicine delete(int id);
    public List findAll();
    public Optional<Medicine> findById(int id);
    public Medicine update(Medicine Medicine);

    }
