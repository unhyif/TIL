import React from 'react';
import classNames from 'classnames';
import Filter from 'components/Filter/Filter';
import ProductList from 'components/ProductList/ProductList';
import styles from './Home.module.scss';

const cn = classNames.bind(styles);

const Home = () => (
  <main className={cn('main')}>
    <Filter />
    <ProductList />
  </main>
);

export default Home;
