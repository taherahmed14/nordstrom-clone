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



export const getProducts = () => async(dispatch) =>{
      try{
       
    dispatch({ type: ALL_PRODUCT_LOADING});
    
    await fetch('http://localhost:4500/products/')
     .then((response) => response.json())
     .then((data) =>{
        dispatch({ 
                type: ALL_PRODUCT_SUCCESS,
                payload:data
           })
       }
    )

    }
      catch(err){
          dispatch({
              type: ALL_PRODUCT_FAIL,
              payload: err.respone.data.message
          })
      }
}

export const getProductsDetails = (id) => async(dispatch) =>{
    try{
       
        dispatch({ type: PRODUCT_DETAILS_LOADING});
       
       await fetch(`http://localhost:4500/products/${id}`)
        .then((response) => response.json())
        .then((data) =>{
           dispatch({ 
                   type: PRODUCT_DETAILS_SUCCESS,
                   payload:data
              })
          }
       )
   
       }
         catch(err){
             dispatch({
                 type: PRODUCT_DETAILS_FAIL,
                 payload: err.respone.data.message
             })
         }



}

export const getData = () => (dispatch) => {
    dispatch(getTodoLoading());
    fetch("http://localhost:3002/todos")
    .then((d) => d.json())
    .then((data) => {
        dispatch(getTodoSuccess(data));
    })
    .catch((err) => {
        dispatch(getTodoError(err));
    });
};

export const clearError = () => async (dispatch) => {
   dispatch({
       type: CLEAR_ERROR,
   })
};