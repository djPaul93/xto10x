 
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';

export const getProducts = products => ({
    type: FILTER_PRODUCTS,
    products,
  });
  
  export const requestProducts = () => ({
    type: REQUEST_PRODUCTS,
  });
  
  export const receivedProducts = json => ({
    type: RECEIVE_PRODUCTS,
    json: json,
  });

export function fetchProducts() {
  return function (dispatch) {
    dispatch(requestProducts());
    return fetch(`https://demo4603548.mockable.io/products`)
      .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    )
      .then((json) => {
        dispatch(receivedProducts(json));
      },
    );
  };
}