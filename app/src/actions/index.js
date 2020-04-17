import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";


export const fetchDnD = (url) => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios
        .get(`http://www.dnd5eapi.co${url}`)
        .then(res => 
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.results }))
        .catch( err => dispatch({ type: FETCH_DATA_FAIL, payload: err }));
};

export const ADD_RACE = "ADD_RACE";

export const addRace = ( selection ) => {
    return{
        type: ADD_RACE,
        payload: selection,
    }
}

export const ADD_CLASS = "ADD_CLASS";

export const addClass = ( selection ) => {
    return{
        type: ADD_CLASS,
        payload: selection,
    }
}