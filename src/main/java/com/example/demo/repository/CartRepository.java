package com.example.demo.repository;

import com.example.demo.model.Cart;
<<<<<<< HEAD
import com.example.demo.model.Orders;
=======
>>>>>>> b729f1a3a5224a4be30e27b4b91ee172026b4ec0
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
<<<<<<< HEAD
public interface CartRepository extends CrudRepository<Orders,Long> {
=======
public interface CartRepository extends CrudRepository<Cart,Long> {
>>>>>>> b729f1a3a5224a4be30e27b4b91ee172026b4ec0

}
