import React from 'react';
import classNames from 'classnames/bind';
import Filter from 'components/Filter/Filter';
import ProductList from 'components/ProductList/ProductList';
import styles from './Home.module.scss';

const cn = classNames.bind(styles);

const Home = () => (
  <main className={cn('home')}>
    <Filter />
    <section className={cn('product-list')}>
      <ProductList />
    </section>
  </main>
);

export default Home;
