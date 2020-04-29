package com.foodapp.backend.DTO;

public class ConnectionDTO {
    private Boolean connection;

    @Override
    public String toString() {
        return "TestConnection{" +
                "connection=" + connection +
                '}';
    }

    public ConnectionDTO() {
    }

    public ConnectionDTO(Boolean connection) {
        this.connection = connection;
    }

    public Boolean getConnection() {
        return connection;
    }

    public void setConnection(Boolean connection) {
        this.connection = connection;
    }
}
