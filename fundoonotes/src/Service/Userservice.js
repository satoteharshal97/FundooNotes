import axios from 'axios';

//User Sign method
export const usersignin = async(obj)=>{
    let response = await axios.post("http://localhost:8000/api/v1/users/login", obj);
    return response;
}

//User SignUp method
export const usersignup = async(obj)=> {
    let response = await axios.post("http://localhost:8000/api/v1/users/registration", obj);
    return response;
}