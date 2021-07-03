import axios from 'axios'

const VEHICLE_API_BASE_URL="http://localhost:8080/viewall";
const VEHICLE_API_URl="http://localhost:8080/delete/";
class Delete{

    getDetails(){
        return axios.get(VEHICLE_API_BASE_URL);
    }
    deleteDetails(Id: any){
        return axios.delete(VEHICLE_API_URl+Id);
    }
}
export default new Delete();