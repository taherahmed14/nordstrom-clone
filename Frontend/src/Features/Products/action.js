
import { 
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERROR
} 
from "./actionTypes";


export const getProducts = (payload) =>{
    return {
        type: ALL_PRODUCT_SUCCESS,
        payload: payload,
        loading:false, 
    }
}

export const getProductsDetails = (payload) =>{
    return {
        type: PRODUCT_DETAILS_SUCCESS,
        payload: payload,
        loading:false, 
    }
}

export const clearError = () => async (dispatch) => {
   dispatch({
       type: CLEAR_ERROR,
   })
};