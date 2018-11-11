package com.example.demo.repository;

import com.example.demo.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends CrudRepository<User,Long> {

     User findByEmail(String email);

     Optional<User> findByUsernameOrEmail(String username, String email);

     List<User> findByIdIn(List<Long> userIds);

     Optional<User> findByUsername(String username);

     Boolean existsByUsername(String username);

     Boolean existsByEmail(String email);
}
