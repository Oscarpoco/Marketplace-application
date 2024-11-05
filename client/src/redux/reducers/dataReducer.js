// Action Types
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../actions/dataActions";

// Initial State
const initialState = {
    items: [],
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
            
        default:
            return state;
    }
};

export default cartReducer;
