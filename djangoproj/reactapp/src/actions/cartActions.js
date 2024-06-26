import axios from "axios";
import { 
    CART_ADD_ARTWORK, 
    CART_REMOVE_ARTWORK,
    CART_SAVE_DELIVERY,
    CART_SAVE_PAYMENT,
} from '../constants/CartConstants'

export const addItemInCart =(id, quantity) => async(dispatch, getState) => {
    const { data } = await axios.get(`/api/artworks/${id}`);

    dispatch ({
        type: CART_ADD_ARTWORK,
        payload: {
            artwork: data._id,
            title: data.title,
            image: data.image,
            price: data.price,
            availability: data.availability,
            quantity
        }
    })
}

export const removeArtFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ARTWORK,
        payload: id
    })
};

export const saveDeliveryAddress = (data) => (dispatch) => {
    dispatch ({
        type: CART_SAVE_DELIVERY,
        payload: data,
    })
    
    localStorage.setItem('deliveryAddress', JSON.stringify(data))
}

export const savePayment = (data) => (dispatch) => {
    dispatch ({
        type: CART_SAVE_PAYMENT,
        payload: data,
    })
    
    localStorage.setItem('paymentethod', JSON.stringify(data))
}