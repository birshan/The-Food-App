package com.foodapp.backend.DTO;

public class PredictionResponse {
    private String foodName;
    private String servingDescription;
    private Double servingWeight;
    private Double calories;
    private Double carbWeight;
    private Double fatWeight;
    private Double sugarsWeight;

    public PredictionResponse() {
    }

    public PredictionResponse(String foodName, String servingDescription, Double servingWeight, Double calories, Double carbWeight, Double fatWeight, Double sugarsWeight) {
        this.foodName = foodName;
        this.servingDescription = servingDescription;
        this.servingWeight = servingWeight;
        this.calories = calories;
        this.carbWeight = carbWeight;
        this.fatWeight = fatWeight;
        this.sugarsWeight = sugarsWeight;
    }

    public String getFoodName() {
        return foodName;
    }

    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }

    public String getServingDescription() {
        return servingDescription;
    }

    public void setServingDescription(String servingDescription) {
        this.servingDescription = servingDescription;
    }

    public Double getServingWeight() {
        return servingWeight;
    }

    public void setServingWeight(Double servingWeight) {
        this.servingWeight = servingWeight;
    }

    public Double getCalories() {
        return calories;
    }

    public void setCalories(Double calories) {
        this.calories = calories;
    }

    public Double getCarbWeight() {
        return carbWeight;
    }

    public void setCarbWeight(Double carbWeight) {
        this.carbWeight = carbWeight;
    }

    public Double getFatWeight() {
        return fatWeight;
    }

    public void setFatWeight(Double fatWeight) {
        this.fatWeight = fatWeight;
    }

    public Double getSugarsWeight() {
        return sugarsWeight;
    }

    public void setSugarsWeight(Double sugarsWeight) {
        this.sugarsWeight = sugarsWeight;
    }

    @Override
    public String toString() {
        return "PredictionResponse{" +
                "foodName='" + foodName + '\'' +
                ", servingDescription='" + servingDescription + '\'' +
                ", servingWeight=" + servingWeight +
                ", calories=" + calories +
                ", carbWeight=" + carbWeight +
                ", fatWeight=" + fatWeight +
                ", sugarsWeight=" + sugarsWeight +
                '}';
    }
}
