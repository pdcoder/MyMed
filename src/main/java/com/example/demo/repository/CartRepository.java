package com.example.demo.repository;

import com.example.demo.model.OrderDAO;
import com.example.demo.model.Orders;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface CartRepository extends CrudRepository<Orders,Long> {

    @Query(value = "SELECT ona.names, o.date_order, o.time_order, o.sum FROM orders o INNER JOIN orders_names ona ON o.id = ona.orders_id WHERE o.user_id = ?1", nativeQuery = true)
    public List getOrderById(int id);

}
