package com.foodapp.backend.api;

import com.foodapp.backend.DTO.MealResponse;
import com.foodapp.backend.DTO.UserInfo;
import com.foodapp.backend.pojo.User;
import com.foodapp.backend.services.MealLogService;
import com.foodapp.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping(path = "/pro")
public class ProfessionalController {

    @Autowired
    UserService userService;

    @Autowired
    MealLogService mealLogService;

    @GetMapping
    public @ResponseBody
    Iterable<UserInfo> getAllUsers(Principal principal) {
        System.out.println("Getting all users by: " + principal.getName());
        Iterable<User> userList = userService.getAllUser();
        ArrayList<UserInfo> userInfoList = new ArrayList<UserInfo>();

        for (User user : userList) {
            userInfoList.add(new UserInfo(user.getEmail(), user.getId(), user.getFirstName(), user.getLastName()));
        }
        return userInfoList;
    }

    @RequestMapping(path = "/{userEmail}", method = RequestMethod.GET)
    public @ResponseBody List<MealResponse> getUserMeals(Principal principal, @PathVariable String userEmail){
        try{
            System.out.println(userEmail);
            return mealLogService.findMealsById(userEmail);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }
}
