// type --> name (Recommanded to be capital)
// payload --> new Value sent as parameter
// here i constructed the action dispatch

// ashan atfda laghbta lw 3ndi kza action
export const ADD_TO_CART = "ADD_TO_CART";

export const addToCart = (payload) => {
  return {
    // type is the name of the action rec to be uppercase
    type: "ADD_TO_CART",
    payload,
    // payload : new val
  };
};
