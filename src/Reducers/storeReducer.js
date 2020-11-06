import { ADD_TO_SAVED, API_CALL } from "../Actions/savedActivities.js";

const initialState = {
    globalSaved: "",
    apiMainLessonQuery: []
}


export const storeReducer = (state = initialState, action) => {

    switch (action.type) {


        case API_CALL:
            console.log("reducer call api " )
            
                return{ ...state, 
                    apiMainLessonQuery: action.payload};
            


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