import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS, FILTER_PRODUCTS } from '../actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_PRODUCTS:
      return { ...state, products: action.products };
    case REQUEST_PRODUCTS:
      return { ...state, loading: true };
    case RECEIVE_PRODUCTS:
      return { ...state, json: action.json, loading: false };
    default:
      return state;
  }
};

export default reducer;