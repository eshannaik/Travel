import {ADD_LOG,DELETE_LOG} from './types.js';

export const add_log = ({Username,Title,Description,Date_added,msg}) => {
    return{
        type: ADD_LOG,
        payload: {
            Username,
            Title,
            Description,
            Date_added,
            msg
        }
    }
}

export const delete_log = ({Username,Title,msg}) => {
    return{
        type: DELETE_LOG,
        payload: {
            Username,
            Title,
            msg
        }
    }
}