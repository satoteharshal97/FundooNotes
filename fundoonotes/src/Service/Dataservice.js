import axios from "axios";

let configObj = {
    headers: {
      Authorization: "bearerToken" + " " + localStorage.getItem("token")
    },
  }

 export const postNote = async (obj) =>{
  let response = await axios.post("http://localhost:3000/api/v1/note", obj, configObj);
  return response;
}

export const getMyNote = async ( ) =>{
  console.log(configObj)
  let response = await axios.get("http://localhost:3000/api/v1/note", configObj);
  return response;
}