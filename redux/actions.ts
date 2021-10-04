export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT_PRODUCT = 'INCREMENT_PRODUCT';
export const DECREMENT_PRODUCT = 'DECREMENT_PRODUCT';
export const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

export const addToCart = (product: any) => ({
    type: ADD_TO_CART,
    payload: { product }
});

export const removeFromCart = (productId : string) => ({
    type: REMOVE_FROM_CART,
    payload: { productId }
});

export const incrementProduct = (productId: string) => ({
    type: INCREMENT_PRODUCT,
    payload: { productId }
});

export const decrementProduct = (productId: string) => ({
    type: DECREMENT_PRODUCT,
    payload: { productId }
});

export const setTotalCount = (total: number) => ({
    type: SET_TOTAL_COUNT,
    payload: { total }
});

export const Actions =
    ADD_TO_CART ||
    REMOVE_FROM_CART ||
    INCREMENT_PRODUCT ||
    DECREMENT_PRODUCT;