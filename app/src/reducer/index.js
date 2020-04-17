import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAIL,
    ADD_RACE,
    ADD_CLASS
} from '../actions';

const initialStore = {
    isFetching: false,
    error: '',
    choices:[],
    selections:{
        race:[],
        class:[]
    }
};

export const reducer = ( state = initialStore, action) =>{
    switch ( action.type ){
        case FETCH_DATA_START:
            return{
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                choices: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_DATA_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case ADD_RACE:
            return{
                ...state.selections,
                race:action.payload,
            }
        default:
            return state
    }
}