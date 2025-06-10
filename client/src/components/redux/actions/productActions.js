import axios from "axios";
import * as actionTypes from "../constants/productConstants";

const URL = 'http://localhost:8000';

export const getProducts = () => async (dispatch) => {
    try {
        // Await the axios call
        const { data } = await axios.get(`${URL}/products`);

        // Dispatch success action with the data
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        // Dispatch failure action with the error message
        dispatch({ type: actionTypes.GET_PRODUCTS_FAILURE, payload: error.message });
    }
};

export const getProductDetails = (id) => async(dispatch)=>{
    try {
        dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_REQUEST});
        const { data } = await axios.get(`${URL}/product/${id}`);
        dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_FAIL, payload: error.message });
    }
}