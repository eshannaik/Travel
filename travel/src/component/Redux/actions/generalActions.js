import axios from 'axios';
import {ADD_LOG,DELETE_LOG,VIEW_LOG} from './types.js';
import { returnErrors } from './errorActions.js';

export const view_log = (Username) => dispatch => {
    axios.post('/main/view/logs/:Username')
        .then( res => dispatch({
            type: VIEW_LOG,
            payload: Username
        }))
        .catch(err => dispatch(returnErrors(err.response.data,err.response.status)))
}

export const add_log = (item) => dispatch => {
    axios.post('/main/add',item)
        .then( res => dispatch({
            type: ADD_LOG,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data,err.response.status)))
}

export const delete_log = (Username,Title) => dispatch => {
    axios.post('/main/remove/:Username/:Title')
        .then( res => dispatch({
            type: DELETE_LOG,
            payload: {
                Username: Username,
                Title: Title
            }
        }))
        .catch(err => dispatch(returnErrors(err.response.data,err.response.status)))
}