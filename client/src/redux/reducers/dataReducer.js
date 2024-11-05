// Action Types
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE } from "../actions/dataActions";

// Initial State
const initialState = {
    items: [],
    loading: false,
    product: null,
    error: null,
};

// Reducer
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
            
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
            };
            
        case CLEAR_CART:
            return {
                ...state,
                items: [],
            };

            case ADD_PRODUCT_REQUEST:
                return { ...state, loading: true, error: null };

            case ADD_PRODUCT_SUCCESS:
                return { ...state, loading: false, product: action.payload, error: null };

            case ADD_PRODUCT_FAILURE:
                return { ...state, loading: false, error: action.payload };
            
        default:
            return state;
    }
};

export default cartReducer;
