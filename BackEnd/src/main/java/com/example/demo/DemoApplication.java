package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@SpringBootApplication
@RestController
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @PostMapping("/read")
    public static String read(@RequestParam(name = "plateNumber") String plateNumber) {

        if (validate(plateNumber)) {
            String formOfVehicle;
            if (plateNumber.contains("-")) {
                Pattern p = Pattern.compile("[a-zA-Z]+");
                Matcher m = p.matcher(plateNumber);
                if (m.find())
                    formOfVehicle = "Modern";
                else
                    formOfVehicle = "Old";
            } else
                formOfVehicle = "Vintage";
            return formOfVehicle;
        }
        else return "Invalid Number Plate";
    }

    public static Boolean validate(String plateNumber){
        boolean validStatus = false;
        if (plateNumber.matches("^([a-zA-Z]{1,3}|((?!0*-)[0-9]{1,3}))-[0-9]{4}(?<!0{4})")){
            validStatus=true;
        }
        return validStatus;


    }

}
