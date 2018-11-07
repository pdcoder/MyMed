package com.example.demo.controller;

import com.example.demo.exceptions.CustomerrorResponse;
import com.example.demo.exceptions.UserExistsException;
import com.example.demo.exceptions.UserNotFoundException;
import com.example.demo.model.User;
import com.example.demo.sevice.MedicineServices;
import com.example.demo.sevice.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
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
    public ResponseEntity<Object> login( @Valid @RequestBody User user){

         if(userServices.findByEmail(user.getEmail())!= null)
         {
             if(bCryptPasswordEncoder.matches(user.getPasswordfield(),userServices.checkPassword(user.getEmail())))
             {
                 CustomerrorResponse errorDetails = new CustomerrorResponse(new Date(), "Login Successful",
                         "Thanks for Logging in");
                 return new ResponseEntity(errorDetails, HttpStatus.ACCEPTED);
             }
             else{
                 throw new UserNotFoundException("Wrong Credentials");
             }
         }
         else {
             throw new UserNotFoundException("Mail Id does not exist");
         }
    }

    @PostMapping("/signup")
    public ResponseEntity<Object> signup( @Valid @RequestBody User user){
        if(userServices.findByEmail(user.getEmail())== null){
            user.setPasswordfield(bCryptPasswordEncoder.encode(user.getPasswordfield()));
            userServices.saveUser(user);
            CustomerrorResponse errorDetails = new CustomerrorResponse(new Date(), "Signup Successful",
                    "Thanks for Signing up");
            return new ResponseEntity(errorDetails, HttpStatus.ACCEPTED);
        }
        else{

             throw new UserExistsException("EmailId already Exists");
        }
    }
}
