import React from 'react';

const {
  Provider: OrderStoreServiceProvider,
  Consumer: OrderStoreServiceConsumer,
} = React.createContext();

export {
  OrderStoreServiceProvider,
  OrderStoreServiceConsumer,
};
