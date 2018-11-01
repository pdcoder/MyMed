package com.example.demo.controller;

import com.example.demo.sevice.MedicineServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping({"/api"})
public class HomeController {

    @Autowired
    private MedicineServices medicineServices;

    @GetMapping(path={"/"})
    public List getMedicineList(){
        return medicineServices.findAll();
    }

}
