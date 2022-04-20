import axios from "axios";

//Saving token in Local Storage
let configObj = {
    headers: {
      Authorization: "bearerToken" + " " + localStorage.getItem("token")
    },
  }

  //Add a new note
 export const postNote = async (obj) =>{
  let response = await axios.post("http://localhost:8000/api/v1/note", obj, configObj);
  return response;
}

//Get all notes for user
export const getMyNote = async () =>{
  /* console.log(configObj) */
  let response = await axios.get("http://localhost:8000/api/v1/note", configObj);
  return response;
}

export const updateMyNote = async (obj, id) =>{
  let response = await axios.put(`http://localhost:8000/api/v1/note/${id}`, obj, configObj);
  return response;
}

export const archiveMyNote = async (id) =>{
  let response = await axios.put(`http://localhost:8000/api/v1/note/isArchived/${id}`, {}, configObj);
  return response;
}

export const deleteMyNote = async (id) =>{
  let response = await axios.put(`http://localhost:8000/api/v1/note/isDeleted/${id}`, {}, configObj);
  return response;
}