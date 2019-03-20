package com.example.demo.repository;

import com.example.demo.model.Medicine;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
 public interface MedicineRepository extends CrudRepository<Medicine, Integer> {

}