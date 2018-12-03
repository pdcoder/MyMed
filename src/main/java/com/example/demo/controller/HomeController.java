package com.example.demo.controller;

import com.example.demo.exceptions.CustomerrorResponse;
import com.example.demo.exceptions.UserExistsException;
import com.example.demo.exceptions.UserNotFoundException;
import com.example.demo.model.Cart;
import com.example.demo.model.JwtUser;
import com.example.demo.model.User;
import com.example.demo.repository.CartRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.JwtGenerator;
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
    UserRepository userRepository;

    @Autowired
    CartRepository cartRepository;

    @Autowired
    private JwtGenerator jwtGenerator;


    private final DoctorServices doctorServices;

    private final MedicineServices medicineServices;

    private final UserServices userServices;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public HomeController(/*VerificationTokenService verificationTokenService,*/ MedicineServices medicineServices, UserServices userServices, BCryptPasswordEncoder bCryptPasswordEncoder) {
      //  this.verificationTokenService = verificationTokenService;
        this.medicineServices = medicineServices;
        this.userServices = userServices;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @GetMapping(path={"/"})
    public List getMedicineList(){
        return medicineServices.findAll();
    }

    @GetMapping(path={"/"})
    public List getDoctorList(){
        return doctorServices.findAll();
    }

    @PostMapping("/login")
    public ResponseEntity<Object> login( @Valid @RequestBody JwtUser jwtUser ){


        if(userServices.findByEmail(jwtUser.getEmail())!= null)
        {
            if(bCryptPasswordEncoder.matches(jwtUser.getPasswordfield(),userServices.checkPassword(jwtUser.getEmail())))
            {
                User jwtmail = userServices.findByEmail(jwtUser.getEmail());
                jwtUser.setUsername(jwtmail.getUsername());
                jwtUser.setId(jwtmail.getId());
                CustomerrorResponse errorDetails = new CustomerrorResponse(new Date(), "Login Successful",
                        jwtGenerator.generate(jwtUser));


                return ResponseEntity.ok(errorDetails);
            }
            else{
                throw new UserNotFoundException("Wrong Credentials");
            }
        }
        else {
            throw new UserNotFoundException("Mail Id does not exist");
        }
    }

    @PostMapping("/cart")
    public ResponseEntity<Boolean> cart(@RequestBody Cart cart)
    {

        cartRepository.save(cart);
        return new ResponseEntity<Boolean>(true,HttpStatus.OK);
    }

    @GetMapping("/doclist")
    public ResponseEntity<Object> doclist(){
return ResponseEntity.ok("Success");
    }


    @PostMapping("/signup")
    public ResponseEntity<Object> signup( @Valid @RequestBody User user){
        if(userServices.findByEmail(user.getEmail())== null){
            user.setPasswordfield(bCryptPasswordEncoder.encode(user.getPasswordfield()));

            userServices.saveUser(user);
            CustomerrorResponse errorDetails = new CustomerrorResponse(new Date(), "Signup Successful",
                    "Thanks for Signing up");
           // verificationTokenService.createVerification(user.getEmail());
            return new ResponseEntity(errorDetails, HttpStatus.ACCEPTED);
        }
        else{

            throw new UserExistsException("EmailId already Exists");
        }
    }


  /*  @GetMapping("/verify-email")
    @ResponseBody
    public String verifyEmail(String code) {
        return verificationTokenService.verifyEmail(code).getBody();
    }*/


}
