import createOrders from '../services/points-store-service';

const ordersRequested = (newState) => ({
  type: 'CREATE_ORDERS_REQUEST',
  payload: newState,
});

export const activeOrder = (newOrder) => ({
  type: 'GET_ACTIVE_ORDER',
  payload: newOrder,
});


const getOrders = (orderStoreService) => () => (dispatch) => {
  // console.log('orderStoreService', orderStoreService)
  dispatch(ordersRequested(orderStoreService));
  // dispatch(ordersLoaded(orderStoreService));
    // .catch((err) => dispatch(ordersError(err)));
};

export default getOrders;
