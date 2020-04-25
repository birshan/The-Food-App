package com.foodapp.backend.api;

import com.foodapp.backend.pojo.MealLog;
import com.foodapp.backend.services.MealLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("api/meal")
@RestController
@CrossOrigin
public class MealLogController {

    @Autowired
    private MealLogService mealLogService;


}
