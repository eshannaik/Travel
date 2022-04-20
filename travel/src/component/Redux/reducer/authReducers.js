import {LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAILED, LOGIN_FAILED, UPDATE_PASSWORD, UPDATE_PASSWORD_FAILED, 
    REMOVED_USER,
    REMOVED_USER_FAILED} from '../actions/types';

const initState = {
    user:null
}

export default function authReducer (state = initState, action){
    switch(action.type){
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
        case UPDATE_PASSWORD:
        case REMOVED_USER:
            return{
                ...state,
                user: action.payload
            }
        case LOGIN_FAILED:
        case REGISTER_FAILED:
        case UPDATE_PASSWORD_FAILED:
        case REMOVED_USER_FAILED:
            return{
                ...state,
                user: action.payload
            }
        case LOGOUT_SUCCESS:
            return{
                ...state,
                user: null
            }
        default:
            return state;
    }
}