package com.foodapp.backend.pojo;


import java.util.Collection;
import java.util.List;

public class AuthResponse {
    private final String jwt;
    private final Collection<?> authorityList;
    private final String firstName;
    private final String lastName;

    public AuthResponse(String jwt, Collection<?> authorityList, String firstName, String lastName) {
        this.jwt = jwt;
        this.authorityList = authorityList;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public Collection<?> getAuthorityList() {
        return authorityList;
    }

    public String getJwt() {
        return jwt;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }
}
