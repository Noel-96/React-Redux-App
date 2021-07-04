import axios from "axios";
import { BASE_URL }  from '../constants';

export const PREV_PAGE = "PREV_PAGE";
export const NEXT_PAGE = "NEXT_PAGE";
export const FETCHING_CHARACTER_START = "FETCHING_CHARACTER_START";
export const FETCHING_CHARACTER_SUCCESS = "FETCHING_CHARACTER_SUCCESS";
export const FETCHING_CHARACTER_FAILURE = "FETCHING_CHARACTER_FAILURE";




export const prevPage = (pageNumber) => (dispatch)=> {
    console.log("prev page function called  page number :",pageNumber)
    dispatch({type: PREV_PAGE, payload: pageNumber});
}

export const nextPage = (pageNumber) => (dispatch) => {
    console.log("next page function called  page number :",pageNumber)
    dispatch({type: NEXT_PAGE, payload: pageNumber});
}

const headers = {
    Accept: "application/json"
}


export const getCharacters = (pageNumber) => (dispatch) => {

   // console.log("getCharacters API called  page number :",pageNumber)
    dispatch({type: FETCHING_CHARACTER_START});
    axios.get(`${BASE_URL}+ ${pageNumber} `) 
    .then(response => {  dispatch({ type: FETCHING_CHARACTER_SUCCESS, payload: response.data.results});
    console.log("getCharacters API called  success:",response.data.results)
     })
    .catch(err => {dispatch({ type: FETCHING_CHARACTER_FAILURE, payload: err });}
    )}