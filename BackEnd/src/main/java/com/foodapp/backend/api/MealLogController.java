package com.foodapp.backend.api;

import com.foodapp.backend.DTO.ErrorResponse;
import com.foodapp.backend.DTO.MealLogDTO;
import com.foodapp.backend.DTO.MealResponse;
import com.foodapp.backend.services.MealLogService;
import com.foodapp.backend.util.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RequestMapping("api/meal")
@RestController
@CrossOrigin
public class MealLogController {

    @Autowired
    private MealLogService mealLogService;


    @GetMapping
    public List<MealResponse> findUsersMeals(Principal principal) {
        return mealLogService.findMealsById(principal.getName());
    }

    @PostMapping
    public ResponseEntity<?> addMeal(Principal principal, @RequestBody MealLogDTO mealLogDTO) {
        try {
            System.out.println(mealLogDTO);
            mealLogService.addMeal(mealLogDTO.getFoodName(), mealLogDTO.getWeight(), principal.getName());
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new ErrorResponse("Error Occurred in Server"));
        }
        return ResponseEntity.status(200).body("Meal Added");
    }

    @DeleteMapping(path = "/{mealID}")
    public ResponseEntity<?> removeMeal(Principal principal, @PathVariable Integer mealID) {
        try {
            System.out.println("Meal to delete: "+ mealID);
            mealLogService.deleteMeal(mealID);
        } catch (ResourceNotFoundException resourceEx) {
            return ResponseEntity.status(400).body(new ErrorResponse("Resource Not Found"));
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(new ErrorResponse("Error Occurred in Server"));
        }
        return ResponseEntity.status(200).body("Meal was deleted");
    }
}
