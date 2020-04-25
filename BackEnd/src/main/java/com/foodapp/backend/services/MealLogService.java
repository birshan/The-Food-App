package com.foodapp.backend.services;

import com.foodapp.backend.repository.MealLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MealLogService {

    @Autowired
    MealLogRepository mealLogRepository;


}
