import axios from 'axios';


export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';

export const addToCart = (item) => ({ type: ADD_TO_CART, payload: item });
export const removeFromCart = (item) => ({ type: REMOVE_FROM_CART, payload: item });
export const clearCart = () => ({ type: CLEAR_CART });

// Action Types
export const ADD_PRODUCT_REQUEST = 'ADD_PRODUCT_REQUEST';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';

// Action Creators
const addProductRequest = () => ({ type: ADD_PRODUCT_REQUEST });
const addProductSuccess = (product) => ({ type: ADD_PRODUCT_SUCCESS, payload: product });
const addProductFailure = (error) => ({ type: ADD_PRODUCT_FAILURE, payload: error });

const token = localStorage.getItem('userToken');

export const addProduct = (productData) => async (dispatch) => {
    dispatch(addProductRequest());
    try {
        const response = await axios.post('http://localhost:9000/api/v1/products', productData, {
            headers: { 
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}` 
            }

        });
     
        dispatch(addProductSuccess(response.data));
    } catch (error) {
        dispatch(addProductFailure(error.response?.data?.message || 'Error adding product'));
    }
};
