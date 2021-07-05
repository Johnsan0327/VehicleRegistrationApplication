import React, {Component} from "react";
import './Find.css'
import {Button} from "../Button";
import axios from "axios";

const FIND_API_URL="http://localhost:8080/read";
class find{
    findDetails(PlateNumber:String){
        return axios.get(FIND_API_URL,PlateNumber);
    }
}

class Find extends Component {

  /*  constructor(props) {
        super(props);
        this.state={
            findDetails:[]
        };
    }*/
    state={
        type:'',
    }
    handleChange=event=>{
        this.setState({type:event.target.value});
    }
    handleSubmit=event=>{
        event.preventDefault();
        axios.get('http://localhost:8080/read/'+this.state.type).then(res=>{
            alert("The Type of the Vehicle--"+res.data)
            console.log(res);
            console.log(res.data);
        })
    }
/*componentDidMount() {
        const type={};
        axios.post(FIND_API_URL,type).then(
            response=>this.setState({findDetails:response.data.type}));
}*/
/*
    findDetails(PlateNumber:String) {
        find.findDetails("").then((res)=>{
            console.log(res);
        });
    }*/

    render() {
        /*const{type}=this.setState;*/
        return (
            <>
                <div className="main-container">
                    <video src='Videos/Find.mp4' autoPlay loop muted/>
                    <h1> Vehicle Model Type</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Type Vehicle plate number" onChange={this.handleChange} >
                        </input><br>

                    </br>
                        <button type="close"
                                className="close">
                            <a href="/"> close</a></button>
                        <input type="submit" value="Submit"
                       />
                    </form>
                </div>
            </>

        )
    }
}
export default Find ;