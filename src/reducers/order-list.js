const updateOrderList = (state, action) => {
  if (state === undefined) {
    return {
      orders: [],
      // loading: true,
      // error: null,
    };
  }
  // console.log('state', state);

  switch (action.type) {
    // console.log(state)
    case 'CREATE_ORDERS_REQUEST':
      return {
        orders: action.payload,
      };

    // case 'CREATE_ORDERS_SUCCESS':
    //   console.log('load', action.payload);
    //   return {
    //     ...state,
    //     orders: action.payload,
    //     loading: false,
    //   };

    // case 'CREATE_ORDERS_FAILURE':
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };

    default:
      return state;
  }
};

export default updateOrderList;
