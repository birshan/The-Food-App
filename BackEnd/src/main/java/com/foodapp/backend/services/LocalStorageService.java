package com.foodapp.backend.services;

import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Path;
import java.util.stream.Stream;

@Component
public class LocalStorageService implements StorageService {


    @Override
    public void inti() {

    }

    @Override
    public String store(MultipartFile file) throws IOException {
        String imagePath = "photos/";
        //TODO change file name from here or from front end request
        FileOutputStream output = new FileOutputStream(imagePath + file.getOriginalFilename());
        output.write(file.getBytes());
        return "File uploaded";
    }

    @Override
    public Stream<Path> loadAll() {
        return null;
    }

    @Override
    public Path load(String filename) {
        return null;
    }

    @Override
    public Resource loadAsResource(String filename) {
        return null;
    }

    @Override
    public void deleteAll() {

    }
}
