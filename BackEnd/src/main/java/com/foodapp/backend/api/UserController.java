package com.foodapp.backend.api;

import com.foodapp.backend.DTO.ErrorResponse;
import com.foodapp.backend.DTO.UserDTO;
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
    public ResponseEntity<?> createUser(@RequestBody UserDTO userDTO) throws Exception {

        //creates new user object with the data from request
        User newUser = new User();
        newUser.setEmail(userDTO.getEmail());
        newUser.setFirstName(userDTO.getFirstName());
        newUser.setLastName(userDTO.getLastName());
        newUser.setActive(true);
        newUser.setRoles(userDTO.getRoles());
        newUser.setPassword(userDTO.getPassword());

        System.out.println(newUser);


        if (!userService.doesUserAlreadyExist(newUser)) {
            userService.saveUser(newUser);
            return ResponseEntity.ok("User Created");
        } else {
            return ResponseEntity.status(409).body(new ErrorResponse("User already registered under email"));
        }

    }


    @GetMapping
    public @ResponseBody Iterable<User> getAllUsers(){
        return userService.getAllUser();
    }


}
