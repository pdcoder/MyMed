package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.sevice.MedicineServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/login")
    public  boolean login(@RequestBody User user){
        return user.getEmail().equals("pd@gmail.com") && user.getPassword().equals("password");
    }
}
