import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { artworkListReducer, artworkDetailsReducer, artworkLikeReducer } from './reducers/artworkReducers';
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateReducer } from './reducers/userReducers'
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, orderListReducer } from './reducers/orderReducers'
import { favoriteReducer } from './reducers/favoriteReducers'

const rootReducer = combineReducers({
  artworkList: artworkListReducer,
  artworkDetails: artworkDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListReducer,
  favorite: favoriteReducer,
  artworkLike: artworkLikeReducer,
});

const cartItemsStorage = localStorage.getItem('cartItems') ? 
    JSON.parse(localStorage.getItem('cartItems')) : [];

const userInfoFromStorage = localStorage.getItem('userInformation') ? 
    JSON.parse(localStorage.getItem('userInformation')) : null;

const deliveryAddressFromStorage = localStorage.getItem('deliveryAddress') ? 
    JSON.parse(localStorage.getItem('deliveryAddress')) : {};

export const initialState = {
  cart: { cartItems: cartItemsStorage, deliveryAddress: deliveryAddressFromStorage},
  userLogin: {userInformation: userInfoFromStorage},
  favorite: { favorites: JSON.parse(localStorage.getItem('favoriteItems')) || [] },
}

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
