import { 
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERROR
} 
from "./actionTypes"

const initialState = { products: [], token: "", setName: "" , productsCount: 0};

export const productReducer = ( state = initialState, {type,payload}) =>{
     
    switch(type){
        case ALL_PRODUCT_REQUEST:
        return{
                loading : true,
                products : []
        }
        case ALL_PRODUCT_SUCCESS : 
        return{
             
              loading : false,
              products : payload,
              productsCount : payload 
        }
        case ALL_PRODUCT_FAIL : 
        return{
             loading : false,
             error : payload,
        }
        case CLEAR_ERROR : 
        return{
             ...state,
             error : null,
        }

        default: 
         return{
            state
         }

    }
}


export const productDetailsReducer = ( state = {product:{} }, {type,payload}) =>{
     
    switch(type){
        case PRODUCT_DETAILS_REQUEST:
        return{
                loading : true,
                ...state,
        }
        case PRODUCT_DETAILS_SUCCESS : 
        return{
             
              loading : false,
              products : payload,
        }
        case PRODUCT_DETAILS_FAIL : 
        return{
             loading : false,
             error : payload,
        }
        case CLEAR_ERROR : 
        return{
             ...state,
             error : null,
        }

        default: 
         return{
            state
         }

    }
}