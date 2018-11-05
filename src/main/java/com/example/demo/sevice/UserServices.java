package com.example.demo.sevice;

import com.example.demo.model.User;

public interface UserServices {
    public User findByEmail(String email);

    public void saveUser(User user);

    public boolean checkPassword(String email);
}