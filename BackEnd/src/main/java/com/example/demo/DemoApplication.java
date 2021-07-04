package com.example.demo;

import com.example.demo.model.Vehicle;
import com.example.demo.repository.VehicleRepository;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
@CrossOrigin(origins = "http://localhost:3000", maxAge = 9000)
@SpringBootApplication
@RestController
public class DemoApplication {
    @Autowired
    private VehicleRepository vehicleRepository;

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
        } else return "Invalid Number Plate";
    }

    public static Boolean validate(String plateNumber) {
        boolean validStatus = false;
        Pattern j=Pattern.compile("^([0-9]{1,2})[\\s]*+(([\\u0D80-\\u0DFF]{1})|([\\u200D]{1}))+[\\s]*+([0-9]{4})");
        Matcher m=j.matcher(plateNumber);
        if (m.find()) {
            validStatus = true;
        }
        return validStatus;

    }

    @PostMapping(path = "/add")
    public @ResponseBody
    String addNewUser(@RequestParam String name,
                      @RequestParam String Email,
                      @RequestParam String Address,
                      @RequestParam int PhoneNumber,
                      @RequestParam String NIC,
                      @RequestParam String TypeOfVehicle,
                      @RequestParam String VehicleNumberPlate) {

        Vehicle v = new Vehicle();
        v.setFullName(name);
        v.setAddress(Address);
        v.setEmail(Email);
        v.setPhoneNumber(PhoneNumber);
        v.setTypeOfVehicle(TypeOfVehicle);
        v.setLicensePlateNumber(VehicleNumberPlate);
        v.setNIC(NIC);
        vehicleRepository.save(v);
        return "Saved";
    }

    @GetMapping(path = "/viewall")
    public @ResponseBody
    Iterable<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    @PostMapping(path = "/viewOne")
    public
    Vehicle viewOne(@RequestParam(value="Id") Long Id) {
        return vehicleRepository.findById(Id);
    }

    @PutMapping("/update/{Id}")
    public Vehicle update(@PathVariable(value = "Id") String Id, @RequestBody Vehicle vehicleDetails)
            throws ResourceNotFoundException {
        Long convertedId=Long.parseLong(Id);
        Vehicle vehicle = vehicleRepository.findById(convertedId);
                if(vehicle == null) {
                    throw  new ResourceNotFoundException("Vehicle details not found for this id:: " +Id);
                } else {
                    vehicle.setFullName(vehicleDetails.getFullName());
                    vehicle.setNIC(vehicleDetails.getNIC());
                    vehicle.setTypeOfVehicle(vehicleDetails.getTypeOfVehicle());
                    vehicle.setEmail(vehicleDetails.getEmail());
                    vehicle.setPhoneNumber(vehicleDetails.getPhoneNumber());
                    vehicle.setAddress(vehicleDetails.getAddress());
                    vehicle.setLicensePlateNumber(vehicleDetails.getLicensePlateNumber());
                    final Vehicle updateTable=vehicleRepository.save(vehicle);
                    return updateTable;
                }
    }
    @DeleteMapping(path = "/delete/{Id}")
    public String deleteRecord(@PathVariable(value = "Id") String Id) throws ResourceNotFoundException{
        Long convertedId = Long.parseLong(Id);
        Vehicle vehicle=vehicleRepository.findById(convertedId);
        if (vehicle==null){
            throw new ResourceNotFoundException("Vehicle details not found for this id:: " +Id);

        }else {
            vehicleRepository.delete(vehicle);
            return "Deleted Vehicle Successfully";
        }
    }
}
