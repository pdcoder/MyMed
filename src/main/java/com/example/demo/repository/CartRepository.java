package com.example.demo.repository;

import com.example.demo.model.Orders;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends CrudRepository<Orders,Long> {


}
