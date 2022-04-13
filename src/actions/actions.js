const activeOrder = (newOrder) => ({
  type: 'GET_ACTIVE_ORDER',
  payload: newOrder,
});

export default activeOrder;
