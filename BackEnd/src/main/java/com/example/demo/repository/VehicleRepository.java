package com.example.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.example.demo.model.Vehicle;
import org.springframework.data.repository.query.Param;

public interface VehicleRepository extends CrudRepository<Vehicle, Integer> {
  /*  @Query("SELECT v from Vehicle v where v.id = :Id")*/
    Vehicle findById(@Param("Id") Long Id);
}
