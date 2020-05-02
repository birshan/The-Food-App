package com.foodapp.backend.api;

import com.foodapp.backend.DTO.ErrorResponse;
import com.foodapp.backend.DTO.MealLogDTO;
import com.foodapp.backend.DTO.MealResponse;
import com.foodapp.backend.pojo.MealLog;
import com.foodapp.backend.pojo.User;
import com.foodapp.backend.services.MealLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequestMapping("api/meal")
@RestController
@CrossOrigin
public class MealLogController {

    @Autowired
    private MealLogService mealLogService;


    @GetMapping
    public List<MealResponse> findMealsById(Principal principal){
        System.out.println(principal.getName());
        return mealLogService.findMealsById(principal.getName());
    }

    @PostMapping
    public  ResponseEntity<?> addMeal(Principal principal, @RequestBody MealLogDTO mealLogDTO){
        try {
            mealLogService.addMeal(mealLogDTO.getFoodName(), mealLogDTO.getWeight(), principal.getName());

        } catch (Exception e) {
            System.out.println(e);
            return ResponseEntity.status(400).body(new ErrorResponse("Error in request format"));
        }
        return ResponseEntity.status(200).body("Meal Added");
    }

}
