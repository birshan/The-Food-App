package com.foodapp.backend.security;

import com.foodapp.backend.pojo.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;


public class MyUserDetails implements UserDetails{

    private String userName;
    private String password;
    private boolean active;
    private ArrayList<GrantedAuthority> authorityList;
    private String firstName;
    private String lastName;

    public MyUserDetails(User user){
        this.userName = user.getEmail();
        this.password = user.getPassword();
        this.active = user.isActive();
        this.authorityList = new ArrayList<>();
        this.authorityList.add(new SimpleGrantedAuthority(user.getRoles()));
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();

    }

    public MyUserDetails() {
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorityList;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.userName;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return active;
    }

    public String getFirstName(){
        return this.firstName;
    }

    public String getLatName(){
        return this.lastName;
    }

    @Override
    public String toString() {
        return "MyUserDetails{" +
                "userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", active=" + active +
                ", authorityList=" + authorityList +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }
}
