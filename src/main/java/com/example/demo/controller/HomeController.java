package com.example.demo.controller;

import com.example.demo.exceptions.CustomerrorResponse;
import com.example.demo.exceptions.UserExistsException;
import com.example.demo.exceptions.UserNotFoundException;
import com.example.demo.model.*;
import com.example.demo.repository.CartRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.JwtGenerator;
import com.example.demo.sevice.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping({"/api"})
public class HomeController {

    Authentication auth = SecurityContextHolder.getContext().getAuthentication();


    @Autowired
    UserRepository userRepository;

    @Autowired
    CartRepository cartRepository;

    @Autowired
    private JwtGenerator jwtGenerator;


    private final DoctorService doctorServices;

    private final MedicineServices medicineServices;

    private final UserServices userServices;

    private final OrderService orderService;

    private final AppointmentService appointmentService;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public HomeController(/*VerificationTokenService verificationTokenService,*/ AppointmentService appointmentService, OrderService orderService, MedicineServices medicineServices, UserServices userServices, BCryptPasswordEncoder bCryptPasswordEncoder, DoctorService doctorServices) {
        //  this.verificationTokenService = verificationTokenService;
        this.medicineServices = medicineServices;
        this.userServices = userServices;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.doctorServices = doctorServices;
        this.orderService = orderService;
        this.appointmentService = appointmentService;
    }

    @GetMapping(path = {"/"})
    public List getMedicineList() {
        System.out.println(medicineServices.findAll());
        return medicineServices.findAll();
    }

   /* @PostMapping("/cart")
    public ResponseEntity<Boolean> cart(@RequestBody Cart cart)
    {
        cartRepository.save(cart);
        return new ResponseEntity<Boolean>(true,HttpStatus.OK);
    }*/

    @GetMapping("/doclist")
    public List doclist() {
        return doctorServices.findAll();
    }

    @GetMapping("/medlist")
    public List medList() {
        return medicineServices.findAll();
    }

    @PostMapping("/login")
    public ResponseEntity<Object> login(@Valid @RequestBody JwtUser jwtUser) {


        if (userServices.findByEmail(jwtUser.getEmail()) != null) {
            if (bCryptPasswordEncoder.matches(jwtUser.getPasswordfield(), userServices.checkPassword(jwtUser.getEmail()))) {
                User jwtmail = userServices.findByEmail(jwtUser.getEmail());
                jwtUser.setUsername(jwtmail.getUsername());
                jwtUser.setId(jwtmail.getId());
                CustomerrorResponse errorDetails = new CustomerrorResponse(new Date(), "Login Successful",
                        jwtGenerator.generate(jwtUser));


                return ResponseEntity.ok(errorDetails);
            } else {
                throw new UserNotFoundException("Wrong Credentials");
            }
        } else {
            throw new UserNotFoundException("Mail Id does not exist");
        }
    }


    @PostMapping("/signup")
    public ResponseEntity<Object> signup(@Valid @RequestBody User user) {
        if (userServices.findByEmail(user.getEmail()) == null) {
            user.setPasswordfield(bCryptPasswordEncoder.encode(user.getPasswordfield()));

            userServices.saveUser(user);
            CustomerrorResponse errorDetails = new CustomerrorResponse(new Date(), "Signup Successful",
                    "Thanks for Signing up");
            // verificationTokenService.createVerification(user.getEmail());
            return new ResponseEntity(errorDetails, HttpStatus.ACCEPTED);
        } else {

            throw new UserExistsException("EmailId already Exists");
        }
    }

    @PostMapping("/order")
    public ResponseEntity order(@Valid @RequestBody Orders order) {
        Date date = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        SimpleDateFormat timeFormat = new SimpleDateFormat("HH:mm:ss");

        order.setDateOrder(String.valueOf(dateFormat.format(date)));
        order.setTimeOrder(String.valueOf(timeFormat.format(date)));
        order.setStatus("Accepted");
        order.setUser(userServices.findByEmail(order.getEmail()));
        orderService.saveOrder(order);
        CustomerrorResponse response = new CustomerrorResponse(new Date(), "Order placed", "Thanks for placing order");
        return new ResponseEntity(response, HttpStatus.ACCEPTED);
    }

    @PostMapping("/bookdoc")
    public ResponseEntity order(@Valid @RequestBody AppointmentDAO appointmentdao, Appointment appointment) {
        int flg = 0;
        appointment.setDate(appointmentdao.getDate());
        appointment.setUser(userServices.findByEmail(appointmentdao.getEmail()));
        appointment.setDoctor(doctorServices.getDoctor(appointmentdao.getDocid()).get());
        boolean chk = appointmentService.findById(appointmentdao.getDate(), appointmentdao.getDocid());
        System.out.println(chk);
        if (!chk) {
              appointmentService.saveAppointment(appointment);
            CustomerrorResponse response = new CustomerrorResponse(new Date(), "Appointment reserved", "Thanks for booking appointment");
            return new ResponseEntity(response, HttpStatus.ACCEPTED);
        } else {
            CustomerrorResponse response = new CustomerrorResponse(new Date(), "Appointment not reserved", "Time filled");
            return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
        }
  /*  @GetMapping("/verify-email")
    @ResponseBody
    public String verifyEmail(String code) {
        return verificationTokenService.verifyEmail(code).getBody();
    }*/

    }

    @GetMapping("/orders/{id}")
    public List getOrders(@PathVariable("id") int id)
    {
        System.out.println(orderService.getOrder(id));

        return orderService.getOrder(id);
    }
}