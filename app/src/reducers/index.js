import { FETCHING_CHARACTER_START, FETCHING_CHARACTER_SUCCESS, FETCHING_CHARACTER_FAILURE, PREV_PAGE, NEXT_PAGE } from "../actions";


const initialState = {
    characterState: [],
    pageNumberState:  1,
    loading: false,
    error: "",
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) { 
        case PREV_PAGE:
            if (action.payload == 1){
              return state;
            } else {
               return {...state, pageNumberState: action.payload - 1}
            }  
        case NEXT_PAGE:
             return{...state, pageNumberState: action.payload + 1}
        case FETCHING_CHARACTER_START:
            return { ...state, loading: true }
        case FETCHING_CHARACTER_SUCCESS:
            return {...state, loading: false, characterState: action.payload}    
        case FETCHING_CHARACTER_FAILURE:
            return {...state, loading: false, characterState: action.payload}  
        default:
            console.log("Error: unknown action type in Title Reducer");
            return state; 
             
    }

}