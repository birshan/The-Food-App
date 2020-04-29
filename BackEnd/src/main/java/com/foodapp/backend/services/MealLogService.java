package com.foodapp.backend.services;

import com.foodapp.backend.pojo.MealLog;
import com.foodapp.backend.pojo.User;
import com.foodapp.backend.repository.MealLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MealLogService {

    @Autowired
    MealLogRepository mealLogRepository;

    public List<MealLog> findMealsById(Integer userID){

        Iterable<MealLog> allMeals = mealLogRepository.findAll();
        List<MealLog> usersMeals = new ArrayList<>();
/*
gets all meallogs then iterates through them to check if the user ID sent in the param from front end equals the users
ID in the meallog entry
 */
        for(MealLog meals: allMeals){
            if (meals.getUser().getId().equals(userID)){
                usersMeals.add(meals);
            }
        }
        return usersMeals;
    }



}
