import updateOrderList from './order-list';

const reducer = (state, action) => ({
  orderList: updateOrderList(state, action),
});

export default reducer;
