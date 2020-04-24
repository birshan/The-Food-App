package com.foodapp.backend.api;

import com.foodapp.backend.pojo.User;
import com.foodapp.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/user")
public class UserController {

    @Autowired
    private UserService userService;

/*
    @PostMapping(path = "/user")
    public @ResponseBody String addNewUser(@RequestParam String firstName,
                                           @RequestParam String email){
        User n = new User();
        n.setFirstName(firstName);
        n.setEmail(email);
        userService.saveUser(n);
        return "Saved";
    }
*/

    @PostMapping
    public ResponseEntity<?> createUser(@RequestParam String email,
                                             @RequestParam String firstName,
                                             @RequestParam String lastName,
                                             @RequestParam String roles,
                                             @RequestParam String password) throws Exception {

        System.out.println("requested");
        User newUser = new User();
        newUser.setEmail(email);
        newUser.setFirstName(firstName);
        newUser.setLastName(lastName);
        newUser.setActive(true);
        newUser.setRoles(roles);
        newUser.setPassword(password);

        if (!userService.doesUserAlreadyExist(newUser)) {
            userService.saveUser(newUser);
            return ResponseEntity.ok("User Created");
        } else {
            return ResponseEntity.status(409).body("User already registered under email");
        }

    }


    @GetMapping
    public @ResponseBody Iterable<User> getAllUsers(){
        return userService.getAllUser();
    }


}
