package com.foodapp.backend.repository;

import com.foodapp.backend.pojo.Food;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface FoodRepository extends CrudRepository<Food, String> {

}
