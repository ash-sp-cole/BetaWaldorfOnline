import axios from "axios";

export const ADD_TO_SEARCH_SAVED  = "ADD_TO_SEARCH_SAVED";
export const ADD_TO_SAVED = "ADD_TO_SAVED";
export const DELETE_FROM_SAVED = "DELETE_FROM_SAVED";
export const GET_SAVED = "GET_SAVED";
export const API_CALL = "API_CALL";
export const API_BOOL = "API_BOOL";

export const getSaved = (data) => {

    return {
        type: GET_SAVED,
        payload: data
    }


}

export const addToSaved = (itemQuantity) => {


    return {
        type: ADD_TO_SAVED,
        payload: itemQuantity

    }

}

export const deleteFromSaved = (data) => {

    return {
        type: DELETE_FROM_SAVED,
        payload: data
    }


}



export const addToSearchSaved = (query) => {

       
    return {
        type: ADD_TO_SEARCH_SAVED,
        payload: query
    }


}


export const apibool = (state) => {

    return {
        type: API_BOOL,
        payload: state


}

}
export const apiBool = (state) => {

    return {
        type: API_BOOL,
        payload: state


}

}




export const callApi = () => async dispatch =>{
  const response = await axios.get("http://localhost:3001/mainlesson")
  const data = await response.data;
   
console.log(data , "action api resonse")
  
dispatch({
        type: API_CALL,
        payload:data
   })
  
  
  
}