package com.foodapp.backend.services;

import com.foodapp.backend.DTO.MealResponse;
import com.foodapp.backend.pojo.Food;
import com.foodapp.backend.pojo.MealLog;
import com.foodapp.backend.pojo.User;
import com.foodapp.backend.repository.MealLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MealLogService {

    @Autowired
    MealLogRepository mealLogRepository;

    @Autowired
    UserService userService;

    @Autowired
    FoodService foodService;

    public List<MealResponse> findMealsById(String userEmail){
        Optional<User> optionalUser = userService.findUser(userEmail);
        if(optionalUser.isPresent()) {
            Integer userID = optionalUser.get().getId();

            Iterable<MealLog> allMeals = mealLogRepository.findAll();
            List<MealResponse> usersMeals = new ArrayList<>();
/*
gets all meallogs then iterates through them to check if the user ID sent in the param from front end equals the users
ID in the meallog entry
 */
            for(MealLog meals: allMeals){
                if (meals.getUser().getId().equals(userID)){
                    Food food = meals.getFoodType();
                    Integer weight = meals.getMealWeight();
                    Double calories = (food.getCalories()/100) * weight;
                    Double fat = (food.getFat_g()/100) * weight;
                    Double carb = (food.getCarbohydrate_g()/100) * weight;
                    Double sugars = (food.getSugars_g()/100) * weight;
                    usersMeals.add(new MealResponse(
                            food.getName(),
                            calories,
                            weight,
                            fat,
                            carb,
                            sugars,
                            meals.getDate()
                    ));
                }
            }
            return usersMeals;

        } else {
            return null;
        }
    }


    public void addMeal(String foodName, int weight, String username) {
        Food food = foodService.findById(foodName);
        Optional<User> optionalUser = userService.findUser(username);
        MealLog meal = new MealLog();
        try {
            meal.setFoodType(food);
            meal.setUser(optionalUser.get());
            meal.setMealWeight(weight);
            meal.setDate(LocalDate.now());
            mealLogRepository.save(meal);

        }catch (Exception ex) {
            ex.printStackTrace();
        }
    }

}
