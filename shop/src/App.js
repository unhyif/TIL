import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopContextProvider from 'contexts/ShopContext';
import FilterContextProvider from 'contexts/FilterContext';
import ErrorBoundary from 'components/ErrorBoundary';
import Layout from 'layouts/Layout';

const Home = lazy(() => import('routes/Home/Home'));
const Cart = lazy(() => import('routes/Cart/Cart'));
const Error = lazy(() => import('routes/Error/Error'));

const App = () => (
  <BrowserRouter>
    {/* <ErrorBoundary> */}
    <Suspense fallback={<div />}>
      <ShopContextProvider>
        <FilterContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </FilterContextProvider>
      </ShopContextProvider>
    </Suspense>
    {/* </ErrorBoundary> */}
  </BrowserRouter>
);

export default App;
