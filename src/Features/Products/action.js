import axios  from "axios";
import { dispatch } from "react";
import {useSelector , useDispatch} from 'react-redux';
import { 
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    CLEAR_ERROR
} 
from "./actionTypes";


export const getProducts = () => async(dispatch) => {
    // return {
    //     type: ALL_PRODUCT_SUCCESS,
    //     payload: payload,
    //     loading:false,
       
    // }

    dispatch({type: ALL_PRODUCT_REQUEST});
    const data = await axios.get('/');
    dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload:data
    })
}


export const clearError = () => async (dispatch) => {
   dispatch({
       type: CLEAR_ERROR,
   })
};