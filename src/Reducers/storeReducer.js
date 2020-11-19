import { ADD_TO_SAVED, API_CALL, ADD_TO_SEARCH_SAVED, API_BOOL } from "../Actions/savedActivities.js";

const initialState = {
    globalSaved: '',
    apiMainLessonQuery: {},
    modalSearchChoice: '',
    apiBool: false
}


export const storeReducer = (state = initialState, action) => {

    switch (action.type) {


        case API_CALL:
            console.log(state.apiMainLessonQuery, "reducer")

            return {
                ...state,
                apiMainLessonQuery: action.payload,
                apiBool: true
            };



        case ADD_TO_SAVED:
                console.log( "in reducer")
            return {
                ...state,
                globalSaved: action.payload,
            }

        case ADD_TO_SEARCH_SAVED:
            console.log( "in reducer")
            return {
                ...state,
                modalSearchChoice: action.payload,
            }

        case API_BOOL:
            console.log("redu " + action.payload)
            return {
                ...state,
                apiBool: action.payload,
            }





        // case DELETE_FROM_SAVED:
        //     return{
        //         ...state,
        //         globalSaved: state.globalSaved - action.payload,
        //     }

        default: return state;

    }




}