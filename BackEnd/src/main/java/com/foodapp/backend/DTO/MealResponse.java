package com.foodapp.backend.DTO;

import java.time.LocalDate;

public class MealResponse {
    private Integer mealID;
    private String foodName;
    private Double calories;
    private int weight;
    private Double fatWeight;
    private Double carbWeight;
    private Double sugarsWeight;
    private LocalDate date;

    public MealResponse(Integer mealID, String foodName, Double calories, int weight, Double fatWeight, Double carbWeight, Double sugarsWeight, LocalDate date) {
        this.mealID = mealID;
        this.foodName = foodName;
        this.calories = calories;
        this.weight = weight;
        this.fatWeight = fatWeight;
        this.carbWeight = carbWeight;
        this.sugarsWeight = sugarsWeight;
        this.date = date;
    }

    public MealResponse(String foodName, Double calories, int weight, Double fatWeight, Double carbWeight, Double sugarsWeight, LocalDate date) {
        this.foodName = foodName;
        this.calories = calories;
        this.weight = weight;
        this.fatWeight = fatWeight;
        this.carbWeight = carbWeight;
        this.sugarsWeight = sugarsWeight;
        this.date = date;
    }

    public Integer getMealID() {
        return mealID;
    }

    public void setMealID(Integer mealID) {
        this.mealID = mealID;
    }

    public MealResponse() {
    }

    public String getFoodName() {
        return foodName;
    }

    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }

    public Double getCalories() {
        return calories;
    }

    public void setCalories(Double calories) {
        this.calories = calories;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public Double getFatWeight() {
        return fatWeight;
    }

    public void setFatWeight(Double fatWeight) {
        this.fatWeight = fatWeight;
    }

    public Double getCarbWeight() {
        return carbWeight;
    }

    public void setCarbWeight(Double carbWeight) {
        this.carbWeight = carbWeight;
    }

    public Double getSugarsWeight() {
        return sugarsWeight;
    }

    public void setSugarsWeight(Double sugarsWeight) {
        this.sugarsWeight = sugarsWeight;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "MealResponse{" +
                "foodName='" + foodName + '\'' +
                ", calories=" + calories +
                ", weight=" + weight +
                ", fatWeight=" + fatWeight +
                ", carbWeight=" + carbWeight +
                ", sugarsWeight=" + sugarsWeight +
                ", date=" + date +
                '}';
    }
}
