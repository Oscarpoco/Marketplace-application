

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

// action type
export const PAY = 'PAY';
// action creator
export const renderPay = () => { 
    return{
        type: PAY,
    }
};

// ENDS