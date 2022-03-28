import {ADD_LOG,DELETE_LOG,VIEW_LOG} from '../actions/types';

const initState = {
    items: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initState, action){
    switch(action.type){
        case VIEW_LOG:
            return{
                ...state,
                items: action.payload
            }
        case ADD_LOG :
            return{
                ...state,
                items: [action.payload,...state.items]
            }
        case DELETE_LOG:
            return{
                ...state,
                items: state.items.filter(item => item.Username !== action.payload.Username && item.Title !== action.payload.Title)
            }
        default:
            return state;
    }
}