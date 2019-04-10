package com.example.demo.sevice;

import com.example.demo.model.Orders;
import com.example.demo.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceimpl implements OrderService{

    @Autowired
    CartRepository cartRepository;

    @Override
    public void saveOrder(Orders order) {
        cartRepository.save(order);
    }

    @Override
    public List getOrder(int id) {
        return (List) cartRepository.getOrderById(id);
    }
}
