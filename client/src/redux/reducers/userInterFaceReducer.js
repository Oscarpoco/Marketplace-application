
// ACTION TYPE FROM USER INTERFACE ACTIONS COMPONENT
import 
{ 
    IS_BANNER,
    IS_LOADER,
    PAY,
    ADD_TO_CART,
    SIGN,
    SIGNUP,
 }
 from "../actions/userInterFaceActions.js";


//  INITIAL STATE
const initialState = {
    isRenderingBanner: false,
    isLoading: false,
    pay: false,
    addToCart: false,
    sign: false,
    signUp: false,
    };
// INITIAL STATE ENDS



// REDUCER
export const userInterfaceReducer = (state = initialState, action) => {

    console.log("Current State:", state); // Log the current state
    console.log("Action Dispatched:", action);
    switch (action.type) {

        // BANNER
        case IS_BANNER:
            return {
                ...state, 
                isRenderingBanner: !state.isRenderingBanner
            };
        // BANNER ENDS

        // LOADER
        case IS_LOADER:
            return {
                ...state, 
                isLoading: !state.isLoading
            };
        // LOADER ENDS

        // PAY
        case PAY:
            return{
                ...state,
                pay: !state.pay
            };
        // PAY ENDS

        // ADD_TO_CART
        case ADD_TO_CART:
            return{
                ...state,
                addToCart: !state.addToCart
            };
        // ADD_TO_CART ENDS

        // SIGN
        case SIGN:
            return{
                ...state,
                sign: !state.sign
            };
        // SIGN ENDS

        // SIGN
        case SIGNUP:
            return{
                ...state,
                signUp: !state.signUp
            };
        // SIGN ENDS

        // DEFAULT
        default:
            return state;
        // DEFAULT ENDS

        }
    }