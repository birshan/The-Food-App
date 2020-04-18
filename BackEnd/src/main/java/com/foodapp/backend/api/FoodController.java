package com.foodapp.backend.api;

import com.foodapp.backend.pojo.Food;
import com.foodapp.backend.services.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(path = "/api/nutrients")
public class FoodController {
    @Autowired
    private FoodService foodService;


    @GetMapping("/{Id}")
    public Food findById(@PathVariable String food){
        return foodService.findById(food);
    }

}


