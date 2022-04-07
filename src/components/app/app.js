import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShopHeader from '../shop-header/shop-header';
import { HomePage, NotFound } from '../pages';
import store from '../../store';
import ErrorBoundry from '../error-boundry';
import { OrderStoreServiceProvider } from '../orderstore-service-context';
import createOrders from '../../services/points-store-service';

const orderStoreService = createOrders();
console.dir(orderStoreService);

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundry>
        <OrderStoreServiceProvider value={orderStoreService}>
          <Router>
            {/* <ShopHeader /> */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFound />} />

            </Routes>
          </Router>
        </OrderStoreServiceProvider>
      </ErrorBoundry>
    </Provider>
  );
}

export default App;
