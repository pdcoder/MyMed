package com.example.demo.controller;

import com.example.demo.exceptions.CustomerrorResponse;
import com.example.demo.exceptions.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class RestExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<CustomerrorResponse> handleException(UserNotFoundException exp)
    {
           CustomerrorResponse cer = new CustomerrorResponse(HttpStatus.NOT_FOUND.value(),exp.getMessage(),System.currentTimeMillis());
           return new ResponseEntity<>(cer,HttpStatus.NOT_FOUND);

    }


}
