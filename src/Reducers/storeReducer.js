import { ADD_TO_SAVED } from "../Actions/savedActivities.js";

const initialState = {
    globalSaved: []
}


export const storeReducer = (state = initialState, action) => {

    switch (action.type) {


        // case GET_SAVED:
        //     return{
        //         ...state,
        //         globalSaved:action.payload
        //     }


        case ADD_TO_SAVED:

            return {
                ...state,
                globalSaved: action.payload,
            }




        // case DELETE_FROM_SAVED:
        //     return{
        //         ...state,
        //         globalSaved: state.globalSaved - action.payload,
        //     }

        default: return state;

    }




}