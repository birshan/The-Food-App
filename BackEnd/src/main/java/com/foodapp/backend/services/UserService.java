package com.foodapp.backend.services;

import com.foodapp.backend.pojo.User;
import com.foodapp.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void saveUser(User user){
        userRepository.save(user);
    }
    public boolean isEmailUsed(String email) {
        Optional<User> optionalUser = userRepository.findByEmail(email);
        return optionalUser.isPresent();
    }
    public Iterable<User> getAllUser(){
        return userRepository.findAll();
    }

    public Optional<User> findUser(String username) {
        return userRepository.findByEmail(username);
    }
}
