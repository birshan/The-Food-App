package com.foodapp.backend.DTO;

import java.time.LocalDate;

public class MealLogDTO {
    private String foodName;
    private int weight;
    public MealLogDTO() {
    }

    public MealLogDTO(String foodName, int weight) {
        this.foodName = foodName;
        this.weight = weight;
    }

    public String getFoodName() {
        return foodName;
    }

    public int getWeight() {
        return weight;
    }

}
