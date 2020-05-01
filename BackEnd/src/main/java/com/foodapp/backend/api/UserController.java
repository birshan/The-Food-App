package com.foodapp.backend.api;

import com.foodapp.backend.DTO.ErrorResponse;
import com.foodapp.backend.DTO.LoginDTO;
import com.foodapp.backend.pojo.User;
import com.foodapp.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Optional;

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
    public ResponseEntity<?> createUser(@RequestBody LoginDTO userDTO) throws Exception {

        //creates new user object with the data from request
        User newUser = new User();
        newUser.setEmail(userDTO.getEmail());
        newUser.setFirstName(userDTO.getFirstName());
        newUser.setLastName(userDTO.getLastName());
        newUser.setActive(true);
        newUser.setRoles(userDTO.getRoles());
        newUser.setPassword(userDTO.getPassword());

        System.out.println(newUser);


        if (!userService.isEmailUsed(userDTO.getEmail())) {
            userService.saveUser(newUser);
            return ResponseEntity.status(200).body("User Created");
        } else {
            return ResponseEntity.status(409).body(new ErrorResponse("User already registered under email"));
        }

    }

//TODO Returns requester's user details
    @GetMapping
    public @ResponseBody
    User getUserDetails(Principal principal) {
        String username = principal.getName();
        System.out.println(username);
        Optional<User> optionalUser = userService.findUser(username);
        return optionalUser.orElse(null);
    }

    /*
    method for testing
    @GetMapping
    public @ResponseBody Iterable<User> getAllUsers(Principal principal){
        System.out.println(principal.getName());

        return userService.getAllUser();
    }
*/

}
