import React, { useContext, useReducer } from 'react';
import { filterReducer } from 'reducers/filterReducer';

const FilterContext = React.createContext({});

const FilterContextProvider = ({ children }) => {
  const filters = {
    ascending: true,
    inStock: true,
    fastDelivery: false,
    rating: 0,
  };
  const [state, dispatch] = useReducer(filterReducer, filters);

  return (
    <FilterContext.Provider value={{ filters: state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);

export default FilterContextProvider;
