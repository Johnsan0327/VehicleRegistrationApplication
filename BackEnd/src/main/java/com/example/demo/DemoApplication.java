package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Scanner;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    private static void read() {
        String plateNumber;
        Scanner scanner=new Scanner(System.in);
        System.out.println("Enter Plate deatils");
        plateNumber=scanner.next();
        

    }

}
