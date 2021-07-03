import view from "./view";
import React,{Component} from "react";
import "./add.css"

class ViewList extends Component{

    constructor() {
        super('');
        this.state={
            details:[]
        }
    }

    componentDidMount(){
        view.getDetails().then((res)=>
            {
                this.setState({details: res.data});
            }
        );
    }
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
                            </tr>
                            </tbody>
                            <tbody>
                            {this.state.details.map(
                                details=>
                                    <tr key={details.id} className="active-row">
                                        <td>{details.id}</td>
                                        <td>{details.fullName}</td>
                                        <td>{details.email}</td>
                                        <td>{details.address}</td>
                                        <td>{details.licensePlateNumber}</td>
                                        <td>{details.phoneNumber}</td>
                                        <td>{details.nic}</td>
                                        <td>{details.typeOfVehicle}</td>
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
export default ViewList;