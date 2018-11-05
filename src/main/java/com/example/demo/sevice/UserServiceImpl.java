package com.example.demo.sevice;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserServices {

    @Autowired
    private UserRepository repository;

    @Override
    public User findByEmail(String email){
         User user = (User) repository.findAll();
         return user;
    }

    @Override
    public void saveUser(User user) {
        repository.save(user);
    }

}
