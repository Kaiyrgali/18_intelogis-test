import React from 'react';
import { OrderStoreServiceConsumer } from '../orderstore-service-context';

const withOrderStoreService = () => (Wrapped) => function (props) {
  return (
    <OrderStoreServiceConsumer>
      {
        (orderStoreService) => (
          <Wrapped
            {...props}
            orderStoreService={orderStoreService}
          />
        )
      }
    </OrderStoreServiceConsumer>
  );
};

export default withOrderStoreService;
