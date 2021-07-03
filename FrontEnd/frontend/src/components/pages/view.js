import axios from 'axios'

const VEHICLE_API_BASE_URL="http://localhost:8080/viewall";

class view{
    getDetails(){
        return axios.get(VEHICLE_API_BASE_URL);
    }
}
export default new view();