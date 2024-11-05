

// BANNER AND PRODUCTS

// action type
export const IS_BANNER = 'IS_BANNER';
// action creator
export const renderBanner = () => ({ type: IS_BANNER });

// ENDS


// LOADER

// action type
export const IS_LOADER = 'IS_LOADER';
// action creator
export const renderLoader = () => {
    return{
        type: IS_LOADER 
    }
    };

// ENDS

// PAY

// action type
export const PAY = 'PAY';
// action creator
export const renderPay = () => { 
    return{
        type: PAY,
    }
};

// ENDS

// ADD_TO_CART

// action type
export const ADD_TO_CART = 'ADD_TO_CART';
// action creator
export const renderAddToCart = () => { 
    return{
        type: ADD_TO_CART,
    }
};

// ENDS


// SIGN UP SIGN IN BUTTON

// action type
export const SIGN = 'SIGN';
// action creator
export const renderSign = () => { 
    return{
        type: SIGN,
    }
};

// ENDS

// SIGN UP SIGN IN BUTTON

// action type
export const SIGNUP = 'SIGNUP';
// action creator
export const renderSignUp = () => { 
    return{
        type: SIGNUP,
    }
};

// ENDS


// SIGN UP SIGN IN BUTTON

// action type
export const OPEN_ADD_ITEM = 'OPEN_ADD_ITEM';
// action creator
export const renderAddItem = () => { 
    return{
        type: OPEN_ADD_ITEM,
    }
};

// ENDS