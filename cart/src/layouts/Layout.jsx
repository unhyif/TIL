import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useShopContext } from 'contexts/ShopContext';
import { useFilterContext } from 'contexts/FilterContext';
import CartItem from 'components/ShortCartItem/ShortCartItem';
import { Navbar, Form, DropdownButton, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './Layout.module.scss';

const cn = classNames.bind(styles);

const Layout = () => {
  const {
    filters: { searchQuery },
    dispatch: filterDispatch,
  } = useFilterContext();

  const handleSearch = e =>
    filterDispatch({ type: 'FILTER_BY_SEARCH', payload: e.target.value });

  const {
    state: { cart },
    dispatch,
  } = useShopContext();

  const navigate = useNavigate();
  const handleNavigate = () => navigate('/cart');

  return (
    <>
      <Navbar bg="dark" className="d-flex justify-content-between py-3 px-4">
        <Link to="/" style={{ fontSize: '28px', color: 'white' }}>
          Shopping cart
        </Link>

        <Form.Control
          type="search"
          className={cn('search', 'text-center')}
          placeholder="Search for a product"
          value={searchQuery}
          onChange={handleSearch}
        />

        <DropdownButton
          id="dropdown-basic-button"
          title={
            <>
              <FaShoppingCart size="1.5em" style={{ marginRight: '0.5rem' }} />
              {cart.length ? cart.length : 'Cart'}
            </>
          }
          variant="success"
          align="end"
        >
          <div className={cn('d-flex flex-column align-items-center', 'cart')}>
            {cart.length ? (
              <>
                {cart.map(item => (
                  <CartItem key={item.id} item={item} dispatch={dispatch} />
                ))}
                <Button
                  variant="warning"
                  className="w-50"
                  onClick={handleNavigate}
                >
                  Go to Cart
                </Button>
              </>
            ) : (
              <span>Empty</span>
            )}
          </div>
        </DropdownButton>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Layout;
