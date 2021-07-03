import React,{useState} from'react';
import {Form} from "react-bootstrap";
import "./add.css";
import {Button} from "../Button";


const Add=(props)=>{
    const [vehicle,setVehicle]=useState({
        name:props.vehicle ? props.vehicle.name :'',
        Email:props.vehicle ? props.vehicle.Email:'',
        Adress:props.vehicle ? props.vehicle.Adress:'',
        PhoneNumber:props.vehicle ? props.vehicle.PhoneNumber:'',
        NIC :props.vehicle ? props.vehicle.NIC:'',
        TypeOfVehicle : props.vehicle ? props.vehicle.TypeOfVehicle:'',
        VehicleNumberPlate: props.vehicle ? props.vehicle.VehicleNumberPlate:''

    });
    const [errorMsg,setErrorMsg]=useState('');
    const {name,Email,Address,PhoneNumber,NIC,TypeOfVehicle,VehicleNumberPlate}=vehicle;

    const handleOnSubmit=(event)=>{
        event.preventDefault();
        const values=[name,Email,Address,PhoneNumber,NIC,TypeOfVehicle,VehicleNumberPlate];
        let errorMsg='';

        const allFieldsFilled=values.every((field)=>{
            const value=`${field}`.trim();
            return value !==''&& value !=='0';
        });
        if (allFieldsFilled){
            const vehicle={
                name,
                Email,
                Address,
                PhoneNumber,
                NIC,
                TypeOfVehicle,
                VehicleNumberPlate
            };
            props.handleOnSubmit(vehicle);
        }else {
            errorMsg="Please Fill Out All the fields";
        }
        setErrorMsg(errorMsg)
    };

    return(
        <>
        <div className="form">
            {errorMsg && <p className="errormsg">{errorMsg}</p> }
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="container" className="container">
                    <Form.Label className="Label">Full Name</Form.Label>
                    <Form.Control
                        className="input-Control"
                        type="text"
                        name="Full Name"
                        value={name}
                        placeholder="Enter Full name"/>
                </Form.Group>
                <Form.Group controlId="container"className="container">
                    <Form.Label className="Label">Email</Form.Label>
                    <Form.Control
                        className="input-Control"
                        type="text"
                        name="Email"
                        value={Email}
                        placeholder="Enter the Email Address"/>
                </Form.Group>
                <Form.Group controlId="container" className="container">
                    <Form.Label className="Label">Address</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="Address"
                        value={Address}
                        placeholder="Enter the residence address"/>
                </Form.Group>
                <Form.Group controlId="container" className="container">
                    <Form.Label className="Label">PhoneNumber</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="Phone Number"
                        value={PhoneNumber}
                        placeholder="Enter Phone Number"/>
                </Form.Group>
                <Form.Group controlId="container" className="container">
                    <Form.Label className="Label">NIC</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="NIC Number"
                        value={NIC}
                        placeholder="Enter NIC Number"/>
                </Form.Group>
                <Form.Group controlId="container" className="container">
                    <Form.Label className="Label">TypeOfVehicle</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="TypeOfVehicle"
                        value={TypeOfVehicle}
                        placeholder="Enter Type Of Vehicle"/>
                </Form.Group>
                <Form.Group controlId="container" className="container">
                    <Form.Label className="Label">VehicleNumberPlate</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="VehicleNumberPlate"
                        value={VehicleNumberPlate}
                        placeholder="Enter Vehicle Number Plate"/>
                </Form.Group>
                <Button varient="primary" type="submit" className="input-submit">
                    Submit
                </Button>
            </Form>
        </div>
        </>
    )
}
export default Add;




