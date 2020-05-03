package com.foodapp.backend.util;

import java.util.function.Supplier;

public class ResourceNotFoundException extends Exception {
    public ResourceNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public ResourceNotFoundException(String message) {
        super(message);
    }

    public ResourceNotFoundException() {
    }

}
