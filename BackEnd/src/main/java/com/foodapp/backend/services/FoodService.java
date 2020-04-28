package com.foodapp.backend.services;

import com.foodapp.backend.pojo.Food;
import com.foodapp.backend.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;


@Service
public class FoodService{

    @Autowired
    private FoodRepository foodRepository;


    public Food findById(String  name){
        return foodRepository.findById(name).orElseThrow(EntityNotFoundException::new);
    }


}