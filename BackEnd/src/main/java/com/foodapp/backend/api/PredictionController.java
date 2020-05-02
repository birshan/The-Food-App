package com.foodapp.backend.api;

import com.foodapp.backend.DTO.PredictionDTO;
import com.foodapp.backend.DTO.PredictionResponse;
import com.foodapp.backend.pojo.Food;
import com.foodapp.backend.services.FoodService;
import com.foodapp.backend.services.PredictionService;
import com.foodapp.backend.services.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;

@RestController
@RequestMapping(path = "/upload_image")
public class PredictionController {

    @Autowired
    private final StorageService storageService;

    @Autowired
    private PredictionService predictionService;

    @Autowired
    FoodService foodService;


    public PredictionController(StorageService storageService) {
        this.storageService = storageService;
    }

    @PostMapping
    public ResponseEntity<?> handleFileUpload(@RequestParam("file") MultipartFile file, RedirectAttributes redirectAttributes) {
        if(file.getName().equalsIgnoreCase("file")){
            System.out.println(file.getName());
        }
        try {
            storageService.store(file);
            System.out.println("file was saved");
        } catch (IOException e) {
            System.out.println("Error Occurred");
            e.printStackTrace();
            return (ResponseEntity<?>) ResponseEntity.badRequest();
        }
        try {
            PredictionDTO response = predictionService.getPrediction(file);
            if(response == null || response.getPrediction().equals("")) {
                return ResponseEntity.status(500).body("Error Occured");

            } else {
                Food foodInfo = foodService.findById(response.getPrediction());
                PredictionResponse predictionResponse = new PredictionResponse();
                predictionResponse.setFoodName(foodInfo.getName());
                predictionResponse.setCalories(foodInfo.getCalories());
                predictionResponse.setServingDescription(foodInfo.getServingDescription1());
                predictionResponse.setServingWeight(foodInfo.getServingWeight1_g());
                predictionResponse.setCarbWeight(foodInfo.getCarbohydrate_g());
                predictionResponse.setFatWeight(foodInfo.getFat_g());
                predictionResponse.setSugarsWeight(foodInfo.getSugars_g());
                return ResponseEntity.status(200).body(foodInfo);
            }
            
        } catch (IOException e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok("File Uploaded");
    }

    @GetMapping
    public ResponseEntity<?> testConnection(){
        Boolean response = predictionService.TestConnection();
        return ResponseEntity.ok(response);
    }

}
