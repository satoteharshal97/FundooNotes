import axios from 'axios';

export const usersignin = async(obj)=>{
    let response = await axios.post("http://localhost:3000/api/v1/users/login", obj);
    return response;
}

export const usersignup = async(obj)=> {
    let response = await axios.post("http://localhost:3000/api/v1/users/registration", obj);
    return response;
}