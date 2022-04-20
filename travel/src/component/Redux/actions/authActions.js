import { LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAILED, LOGIN_FAILED, UPDATE_PASSWORD, UPDATE_PASSWORD_FAILED,
    REMOVED_USER,REMOVED_USER_FAILED} from './types';

export const loggedin = ({Username,msg}) => {
    return{
        type: LOGIN_SUCCESS,
        payload: {
            Username,
            msg
        }
    }
}

export const loggedin_failed = ({msg}) => {
    return{
        type: LOGIN_FAILED,
        payload: {
            msg
        }
    }
}

export const registered = ({msg}) => {
    return{
        type: REGISTER_SUCCESS,
        payload: {
            msg
        }
    }
}

export const registered_failed = ({msg}) => {
    return{
        type: REGISTER_FAILED,
        payload: {
            msg
        }
    }
}

export const loggedout = () => {
    return{
        type: LOGOUT_SUCCESS
    }
}

export const update_password = ({msg}) => {
    return{
        type: UPDATE_PASSWORD,
        payload:{
            msg
        }
    }
}

export const update_password_failed = ({msg}) => {
    return{
        type: UPDATE_PASSWORD_FAILED,
        payload:{
            msg
        }
    }
}

export const removed = ({Username,msg}) => {
    return{
        type: REMOVED_USER,
        payload:{
            Username,
            msg
        }
    }
}

export const removed_failed = ({msg}) => {
    return{
        type: REMOVED_USER_FAILED,
        payload:{
            msg
        }
    }
}

