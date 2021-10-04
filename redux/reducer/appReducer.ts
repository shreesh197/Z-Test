import { ADD_TO_CART, REMOVE_FROM_CART, SET_TOTAL_COUNT } from '../actions';
import { MarketState } from '../types';

const initialState: MarketState = {
    cartItems: [],
    total: 0
};

export default function MarketReducer(state = initialState, action : any) {
    switch (action.type) {
        case ADD_TO_CART: {
            const { product } = action.payload;
            const items = [...state.cartItems];
            items.push(product);
            return {
                ...state,
                cartItems: items,
                total: state.total + 1
            };
        }
        case SET_TOTAL_COUNT: {
            const { total } = action.payload;
            return {
                ...state,
                total
            };
        }
        default:
            return state;
    }
}
