package com.example.demo.sevice;

import com.example.demo.model.Appointment;

import java.util.List;
import java.util.Optional;

public interface AppointmentService {

    public void saveAppointment(Appointment appointment) ;
    public boolean findById(String date,int id);
}
