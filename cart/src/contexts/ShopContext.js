import React, { useContext, useReducer } from 'react';
import { cartReducer } from 'reducers/cartReducer';
import { faker } from '@faker-js/faker';

const ShopContext = React.createContext([]);

const ShopContextProvider = ({ children }) => {
  const products = [...Array(20)].map(value => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.abstract(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));
  const [state, dispatch] = useReducer(cartReducer, { products, cart: [] });

  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

export const useShopContext = () => useContext(ShopContext);
