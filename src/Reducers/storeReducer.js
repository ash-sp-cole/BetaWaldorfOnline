import { ADD_TO_SAVED, API_CALL, ADD_TO_SEARCH_SAVED, API_BOOL } from "../Actions/savedActivities.js";

const initialState = {
    globalSaved: "",
    apiMainLessonQuery: [],
    modalSearchChoice:'',
    apiBool: false
}
const update = (state, mutations) =>
  Object.assign({}, state, mutations)

export const storeReducer = (state = initialState, action) => {
   
    switch (action.type) {

        case API_CALL:
            
            console.log(state.apiMainLessonQuery + " store redux")

            return state = update(state, { apiMainLessonQuery:  action.payload})


        case ADD_TO_SAVED:
           
            return {
                ...state,
                globalSaved: action.payload,
            }
            
        case ADD_TO_SEARCH_SAVED:
           
            return {
                ...state,
               modalSearchChoice: action.payload,
            }

            case API_BOOL:
     
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