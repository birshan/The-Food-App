package com.foodapp.backend.api;

import com.foodapp.backend.services.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;

@Controller
@RequestMapping(path = "/upload_image")
public class FileUploadController {

    @Autowired
    private final StorageService storageService;

    public FileUploadController(StorageService storageService) {
        this.storageService = storageService;
    }

    @PostMapping
    public ResponseEntity<?> handleFileUpload(@RequestParam("file") MultipartFile file, RedirectAttributes redirectAttributes) {
        if(file.getName().equalsIgnoreCase("file")){
            System.out.println(file.getName());
        }
        try {
            storageService.store(file);
            System.out.println("file was saved");
        } catch (IOException e) {
            System.out.println("Error Occurred");
            e.printStackTrace();
            return (ResponseEntity<?>) ResponseEntity.badRequest();
        }
        return ResponseEntity.ok("File Uploaded");
    }



}
