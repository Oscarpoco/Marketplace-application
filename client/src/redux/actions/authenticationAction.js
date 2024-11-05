// src/redux/actions/authActions.js

import axios from 'axios';

// Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';  
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';   
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';  

// Action Creators
export const loginRequest = () => ({
    type: LOGIN_REQUEST,
});

export const loginSuccess = (token, user) => ({
    type: LOGIN_SUCCESS,
    payload: { token, user },
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
});

// Sign-Up Action Creators
export const signUpRequest = () => ({
    type: SIGNUP_REQUEST,
});

export const signUpSuccess = (token, user) => ({
    type: SIGNUP_SUCCESS,
    payload: { token, user },
});

export const signUpFailure = (error) => ({
    type: SIGNUP_FAILURE,
    payload: error,
});

// Login Action
export const loginUser = (email, password) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const response = await axios.post('http://localhost:9000/api/v1/login', { email, password });
        const { token, user } = response.data;

        // Store token in local storage
        localStorage.setItem('userToken', token);

        dispatch(loginSuccess(token, user));
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Login failed';
        dispatch(loginFailure(errorMessage));
        console.error({errorMessage});
    }
};

// Sign-Up Action
export const signUpUser = (email, password) => async (dispatch) => {
    dispatch(signUpRequest());
    try {
        const response = await axios.post('/api/v1/register', { email, password });
        const { token, user } = response.data;

        // Store token in local storage
        localStorage.setItem('userToken', token);

        dispatch(signUpSuccess(token, user));
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Sign up failed';
        dispatch(signUpFailure(errorMessage));
        console.error({errorMessage});
    }
};

// Logout Action
export const logoutUser = () => {
    localStorage.removeItem('userToken');
    return { type: LOGOUT };
};
