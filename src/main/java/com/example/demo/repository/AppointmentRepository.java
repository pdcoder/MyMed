package com.example.demo.repository;

import com.example.demo.model.Appointment;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepository  extends CrudRepository<Appointment,Integer> {

    @Query(value = "SELECT COUNT(*) FROM appointment a WHERE a.date = ?1 AND a.doctor_id = ?2", nativeQuery = true)
    public int isFree(String date, int id);
}
