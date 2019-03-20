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
         User user =  repository.findByEmail(email);
         return user;
    }

    @Override
    public String checkPassword(String email){
        User user = findByEmail(email);
        return user.getPasswordfield();
    }

    @Override
    public void saveUser(User user) {
        repository.save(user);
    }

}
