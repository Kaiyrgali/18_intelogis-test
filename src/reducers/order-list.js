const updateOrderList = (state, action) => {
  if (state === undefined) {
    return {
      orders: [],
      activeOrder: undefined,
    };
  }
  // console.log('state', state);

  switch (action.type) {
    
    case 'CREATE_ORDERS_REQUEST':
      console.log(state);
      return {
        activeOrder: state.orderList.activeOrder,
        orders: action.payload,
        // activeOrder,
      };

    case 'GET_ACTIVE_ORDER':
      return {
        ...state,
        activeOrder: action.payload,
      }

    default:
      return state;
  }
};

export default updateOrderList;
