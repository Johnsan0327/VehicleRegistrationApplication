import Delete from "./delete";
import React,{Component} from "react";
import "./add.css"
import axios from "axios";

class DeleteList extends Component{

    constructor() {
        super('');
        this.state={
            details1:[]
        };

    }
    deleteRecord(Id : any) {
        Delete.deleteDetails(Id).then((res)=>{
            console.log(res);
        });
    }
    componentDidMount(){
        Delete.getDetails().then((res)=>
            {
                this.setState({details1: res.data});
            }
        );}


    render(){

        return(
            <>
                <div>
                    <h2> Details</h2>
                    <div>
                        <table className="Styled-table">
                            <tbody>
                            <tr>
                                <th>ID</th>
                                <th>FullName</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Vehicle Plate Number </th>
                                <th>Phone Number</th>
                                <th>NIC</th>
                                <th>Vehicle type</th>
                                <th>Delete</th>
                            </tr>
                            </tbody>
                            <tbody>
                            {this.state.details1.map(
                                details1=>
                                    <tr key={details1.id} className="active-row">
                                        <td>{details1.id}</td>
                                        <td>{details1.fullName}</td>
                                        <td>{details1.email}</td>
                                        <td>{details1.address}</td>
                                        <td>{details1.licensePlateNumber}</td>
                                        <td>{details1.phoneNumber}</td>
                                        <td>{details1.nic}</td>
                                        <td>{details1.typeOfVehicle}</td>
                                        <td><button onClick={this.deleteRecord.bind(this, details1.id)} >Delete</button></td>
                                    </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }

}
export default DeleteList;