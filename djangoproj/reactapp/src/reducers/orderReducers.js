import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
    ORDER_CREATE_RESET,

    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,

    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS,
    ORDER_PAY_FAIL,
    ORDER_PAY_RESET,

    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS,
    ORDER_LIST_FAIL,
    ORDER_LIST_RESET,

    ORDER_ADMIN_REQUEST,
    ORDER_ADMIN_SUCCESS,
    ORDER_ADMIN_FAIL,

    ORDER_DELIVERY_REQUEST,
    ORDER_DELIVERY_SUCCESS,
    ORDER_DELIVERY_FAIL,
    ORDER_DELIVERY_RESET,

} from '../constants/orderConstants';

const initialState = {
    loading: false,
    success: false,
    order: {},
    error: null,
};

export const orderCreateReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return { ...state, loading: true };
        case ORDER_CREATE_SUCCESS:
            return { loading: false, success: true, order: action.payload, error: null };
        case ORDER_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case ORDER_CREATE_RESET:
            return initialState;
        default:
            return state;
    }
};

export const orderDetailsReducer = (state = {loading: true, orderItems: [], deliveryAddress: {}}, action) => {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return { ...state, loading: true };
        case ORDER_DETAILS_SUCCESS:
            return { loading: false, order: action.payload };
        case ORDER_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const orderPayReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_PAY_REQUEST:
            return { ...state, loading: true };
        case ORDER_PAY_SUCCESS:
            return { loading: false, success: true};
        case ORDER_PAY_FAIL:
            return { loading: false, error: action.payload };
            case ORDER_PAY_RESET:
                return {};
        default:
            return state;
    }
};

export const orderDeliveryReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_DELIVERY_REQUEST:
            return { loading: true };
        case ORDER_DELIVERY_SUCCESS:
            return { loading: false, success: true};
        case ORDER_DELIVERY_FAIL:
            return { loading: false, error: action.payload };
            case ORDER_DELIVERY_RESET:
                return {};
        default:
            return state;
    }
};

export const orderListReducer = (state = {orders: []}, action) => {
    switch (action.type) {
        case ORDER_LIST_REQUEST:
            return { ...state, loading: true };
        case ORDER_LIST_SUCCESS:
            return { loading: false, orders: action.payload};
        case ORDER_LIST_FAIL:
            return { loading: false, error: action.payload };
            case ORDER_LIST_RESET:
                return {orders: []};
        default:
            return state;
    }
};

export const orderAdminReducer = (state = {orders: []}, action) => {
    switch (action.type) {
        case ORDER_ADMIN_REQUEST:
            return { ...state, loading: true };
        case ORDER_ADMIN_SUCCESS:
            return { loading: false, orders: action.payload};
        case ORDER_ADMIN_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};