package com.foodapp.backend.services;

import com.foodapp.backend.pojo.User;
import com.foodapp.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void saveUser(User user){
        userRepository.save(user);
    }
    public boolean doesUserAlreadyExist(User user) {
        //TODO
        return false;
    }
    public Iterable<User> getAllUser(){
        return userRepository.findAll();
    }
}
