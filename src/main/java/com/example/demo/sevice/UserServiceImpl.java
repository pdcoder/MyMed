package com.example.demo.sevice;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class UserServiceImpl implements UserServices {

    @Autowired
    private UserRepository repository;

    @Override
    public User findByEmail(String email){
         repository.findAll();
        return null;
    }

}
