export const ADD_TO_SAVED = "ADD_TO_SAVED";
export const DELETE_FROM_SAVED = "DELETE_FROM_SAVED";
export const GET_SAVED = "GET_SAVED";


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
