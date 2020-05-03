package com.foodapp.backend.services;

import com.foodapp.backend.DTO.ConnectionDTO;
import com.foodapp.backend.DTO.PredictionDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class PredictionService {

    private final RestTemplate restTemplate;

    @Value("${flask.url}")
    private String flaskURL;

    public PredictionService() {
        this.restTemplate = new RestTemplate();
    }

    public Boolean TestConnection(){
        String url = flaskURL+ "test";
        ConnectionDTO connection = restTemplate.getForObject(url, ConnectionDTO.class);
        return connection.getConnection();
    }

    public PredictionDTO getPrediction(MultipartFile file) throws IOException {
        String url = flaskURL+"/";
        //adding header with content information
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);
        //including the image in the as form data
        MultiValueMap<String, String> fileMap = new LinkedMultiValueMap<>();
        ContentDisposition contentDisposition = ContentDisposition
                .builder("form-data")
                .name(file.getName())
                .filename(file.getOriginalFilename())
                .build();
        fileMap.add(HttpHeaders.CONTENT_DISPOSITION, contentDisposition.toString());
        HttpEntity<byte[]> fileEntity = new HttpEntity<>(file.getBytes(), fileMap);

        //adding the data to the body of the HTTP request
        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("file", fileEntity);
        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);
        try{
            //sending request to flask server and getting prediction of the food type
            ResponseEntity<PredictionDTO> response = restTemplate.exchange(
                    url,
                    HttpMethod.POST,
                    requestEntity,
                    PredictionDTO.class);
            PredictionDTO prediction = response.getBody();
            if(prediction.getPrediction() != null) {
                return prediction;
            }
            return null;
        } catch(HttpClientErrorException ex) {
            ex.printStackTrace();
        }
        return null;
    }

}
