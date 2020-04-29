package com.foodapp.backend.pojo;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
public class MealLog {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer meadId;
    private Integer mealWeight;
    @ManyToOne
    private Food foodType;
    @ManyToOne
    private User user;
    private LocalDate date;

    public MealLog() {
    }

    public MealLog(Integer mealWeight, Food foodType, User user, LocalDate date) {
        this.mealWeight = mealWeight;
        this.foodType = foodType;
        this.user = user;
        this.date = date;
    }

    public Integer getMeadId() {
        return meadId;
    }

    public void setMeadId(Integer meadId) {
        this.meadId = meadId;
    }

    public Integer getMealWeight() {
        return mealWeight;
    }

    public void setMealWeight(Integer mealWeight) {
        this.mealWeight = mealWeight;
    }

    public Food getFoodType() {
        return foodType;
    }

    public void setFoodType(Food foodType) {
        this.foodType = foodType;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "MealLog{" +
                "meadId=" + meadId +
                ", mealWeight=" + mealWeight +
                ", foodType=" + foodType +
                ", user=" + user +
                ", date=" + date +
                '}';
    }
}
