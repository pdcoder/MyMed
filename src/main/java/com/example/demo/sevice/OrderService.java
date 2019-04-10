package com.example.demo.sevice;

import com.example.demo.model.Orders;

import java.util.List;

public interface OrderService {

    public void saveOrder(Orders order) ;
    public List getOrder(int id);
}
