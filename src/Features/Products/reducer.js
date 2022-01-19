import { 
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    CLEAR_ERROR
} 
from "./actionTypes"

const initialState = { products: [], token: "", setName: "" , productsCount: 0};

export const reducer = ( state = initialState, {type,payload}) =>{
     
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