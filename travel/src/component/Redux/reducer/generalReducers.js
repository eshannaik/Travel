import {ADD_LOG,DELETE_LOG} from '../actions/types';

const initState = {
    items: null
}

export default function generalReducer(state = initState, action){
    switch(action.type){
        case ADD_LOG :
            return{
                ...state,
                items: action.payload
            }
        case DELETE_LOG:
            return{
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}