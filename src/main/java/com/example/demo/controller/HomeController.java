package com.example.demo.controller;

import com.example.demo.exceptions.UserNotFoundException;
import com.example.demo.model.User;
import com.example.demo.sevice.MedicineServices;
import com.example.demo.sevice.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping({"/api"})
public class HomeController {

    @Autowired
    private MedicineServices medicineServices;

    @Autowired
    private UserServices userServices;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @GetMapping(path={"/"})
    public List getMedicineList(){
        return medicineServices.findAll();
    }

    @PostMapping("/login")
    public  boolean login(@Valid @RequestBody User user){

         if(userServices.findByEmail(user.getEmail())!= null)
         {
             if(bCryptPasswordEncoder.matches(user.getPasswordfield(),userServices.checkPassword(user.getEmail())))
             {
                 return true;
             }
             else{
                 throw new UserNotFoundException();
             }
         }
         else{
             return false;
         }
    }

    @PostMapping("/signup")
    public boolean signup( @RequestBody User user){
        if(userServices.findByEmail(user.getEmail())== null) {
            user.setPasswordfield(bCryptPasswordEncoder.encode(user.getPasswordfield()));
            userServices.saveUser(user);
        }
        else{
           // return false;
            throw new UserNotFoundException();
        }

        return  true;

    }
}
