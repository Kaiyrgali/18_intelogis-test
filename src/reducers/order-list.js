const updateOrderList = (state, action) => {

  switch (action.type) {

    case 'GET_ACTIVE_ORDER':
      return {
        activeOrder: action.payload,
      }

    default:
      return {
        activeOrder: undefined,
      }
  }
};

export default updateOrderList;
