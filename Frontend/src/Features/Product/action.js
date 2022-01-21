import axios from "axios"
import { 
    ALL_PRODUCT_LOADING,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    PRODUCT_DETAILS_LOADING,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERROR
} 
from "./actionType";


export const  getproductsLoading = () => {
    return {
        type: ALL_PRODUCT_LOADING,
    }
}


export const  getproductsSuccess = (payload) => {
    return {
        type: ALL_PRODUCT_SUCCESS,
        payload: payload,
    }
}

export const  getproductsFail = (payload) => {
    return {
        type: ALL_PRODUCT_FAIL,
        payload: payload,
    }
}



export const  productsDetailsLoading = () => {
    return {
        type: PRODUCT_DETAILS_LOADING,
        
    }
}


export const  productsDetailsSuccess = (payload) => {
    return {
        type: PRODUCT_DETAILS_SUCCESS,
        payload: payload,
    }
}

export const  productsDetailsFail = (payload) => {
    return {
        type: PRODUCT_DETAILS_FAIL,
        payload: payload,
    }
}


export const clearError = () => async (dispatch) => {
   dispatch({
       type: CLEAR_ERROR,
   })
};