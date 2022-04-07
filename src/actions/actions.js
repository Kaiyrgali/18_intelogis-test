import createOrders from '../services/points-store-service';

const ordersRequested = (newState) => ({
  type: 'CREATE_ORDERS_REQUEST',
  payload: newState,
});

// const ordersLoaded = (newOrders) => ({
//   type: 'CREATE_ORDERS_SUCCESS',
//   payload: newOrders,
// });

// const ordersError = (error) => ({
//   type: 'CREATE_ORDERS_FAILURE',
//   payload: error,
// });

const getOrders = (orderStoreService) => () => (dispatch) => {
  // console.log('orderStoreService', orderStoreService)
  dispatch(ordersRequested(orderStoreService));
  // dispatch(ordersLoaded(orderStoreService));
    // .catch((err) => dispatch(ordersError(err)));
};

export default getOrders;
