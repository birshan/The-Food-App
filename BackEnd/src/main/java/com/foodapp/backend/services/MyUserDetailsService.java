package com.foodapp.backend.services;

import com.foodapp.backend.pojo.User;
import com.foodapp.backend.repository.UserRepository;
import com.foodapp.backend.security.MyUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    public MyUserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByEmail(s);

        user.orElseThrow(() -> new UsernameNotFoundException("Email Not Found: " + s));

        return user.map(MyUserDetails::new).get();
    }

}
