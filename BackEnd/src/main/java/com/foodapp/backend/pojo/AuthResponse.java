package com.foodapp.backend.pojo;


import java.util.Collection;
import java.util.List;

public class AuthResponse {
    private final String jwt;
    private final Collection<?> authorityList;

    public AuthResponse(String jwt, Collection<?> authorityList) {
        this.jwt = jwt;
        this.authorityList = authorityList;
    }

    public Collection<?> getAuthorityList() {
        return authorityList;
    }

    public String getJwt() {
        return jwt;
    }


}
