package com.example.demo.controller;

import com.example.demo.model.Doctor;
import com.example.demo.model.Medicine;

import java.util.List;

public class CombinedList {

    public final List<Medicine> med;
    public final List<Doctor> doc;

    public CombinedList(List<Medicine> med, List<Doctor> doc)
    {
        this.med = med;
        this.doc = doc;
    }
}
