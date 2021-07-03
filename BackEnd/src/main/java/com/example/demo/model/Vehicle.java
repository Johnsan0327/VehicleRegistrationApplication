package com.example.demo.model;

import javax.persistence.*;


@Entity // This tells Hibernate to make a table out of this class
public class Vehicle {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String 	FullName;
    private int PhoneNumber;
    private String NIC;
    private String Address;
    private String TypeOfVehicle;
    private String LicensePlateNumber;
    private String email;

    public String getFullName() {
        return FullName;
    }

    public void setFullName(String fullName) {
        FullName = fullName;
    }

    public int getPhoneNumber() {
        return PhoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        PhoneNumber = phoneNumber;
    }

    public String getNIC() {
        return NIC;
    }

    public void setNIC(String NIC) {
        this.NIC = NIC;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public String getTypeOfVehicle() {
        return TypeOfVehicle;
    }

    public void setTypeOfVehicle(String typeOfVehicle) {
        TypeOfVehicle = typeOfVehicle;
    }

    public String getLicensePlateNumber() {
        return LicensePlateNumber;
    }

    public void setLicensePlateNumber(String licensePlateNumber) {
        LicensePlateNumber = licensePlateNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public Long getId() {
        return id;
    }
}