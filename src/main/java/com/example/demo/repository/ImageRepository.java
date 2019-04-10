package com.example.demo.repository;

import com.example.demo.model.Appointment;
import com.example.demo.model.Image;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends CrudRepository<Image,Integer> {

    String getImageById(int id);
}
