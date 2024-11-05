// src/redux/reducers/authReducer.js

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
} from '../actions/authenticationAction.js';

const initialState = {
    authentication: false,
    token: null,
    user: null,
    loading: false,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            return {
                ...state,
                authentication: true,
                token: action.payload.token,
                user: action.payload.user,
                loading: false,
                error: null,
            };
        case LOGIN_FAILURE:
        case SIGNUP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default authReducer;
