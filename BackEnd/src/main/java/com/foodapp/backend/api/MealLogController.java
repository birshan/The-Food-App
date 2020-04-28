package com.foodapp.backend.api;

import com.foodapp.backend.pojo.MealLog;
import com.foodapp.backend.services.MealLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RequestMapping("api/meal")
@RestController
@CrossOrigin
public class MealLogController {

    @Autowired
    private MealLogService mealLogService;

    @GetMapping("/{userID}")
    public List<MealLog> findMealsById(@PathVariable Integer userID){
        return mealLogService.findMealsById(userID);
    }

}
