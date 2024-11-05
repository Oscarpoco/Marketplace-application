
// ACTION TYPE FROM USER INTERFACE ACTIONS COMPONENT
import 
{ 
    IS_BANNER,
    IS_LOADER,
    PAY,
 }
 from "../actions/userInterFaceActions.js";


//  INITIAL STATE
const initialState = {
    isRenderingBanner: false,
    isLoading: false,
    pay: false,
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

        // DEFAULT
        default:
            return state;
        // DEFAULT ENDS

        }
    }