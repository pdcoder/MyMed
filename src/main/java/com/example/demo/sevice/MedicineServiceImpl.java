package com.example.demo.sevice;

import com.example.demo.model.Medicine;
import com.example.demo.repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MedicineServiceImpl implements MedicineServices {

    @Autowired
    private MedicineRepository repository;

    @Override
    public Medicine create(Medicine medicine) {
        return repository.save(medicine);
    }

    @Override
    public Medicine delete(int id) {
        return null;
    }


    @Override
    public List findAll() {
        return (List) repository.findAll();
    }

    @Override
    public Optional<Medicine> findById(int id) {
        return repository.findById(id);
    }

    @Override
    public Medicine update(Medicine Medicine) {
        return null;
    }
}