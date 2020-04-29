package com.foodapp.backend.DTO;

public class PredictionDTO {
    private String filename;
    private String prediction;

    public PredictionDTO(String filename, String prediction) {
        this.filename = filename;
        this.prediction = prediction;
    }

    public PredictionDTO() {
    }

    public String getPrediction() {
        return prediction;
    }

    public void setPrediction(String prediction) {
        this.prediction = prediction;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    @Override
    public String toString() {
        return "PredictionDTO{" +
                "filename='" + filename + '\'' +
                ", prediction='" + prediction + '\'' +
                '}';
    }
}
