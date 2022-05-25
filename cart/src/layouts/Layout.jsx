import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useShopContext } from 'contexts/ShopContext';
import CartItem from 'components/ShortCartItem/ShortCartItem';
import { Navbar, Form, DropdownButton, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './Layout.module.scss';

const cn = classNames.bind(styles);

const Layout = () => {
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
          className={cn('search')}
          placeholder="Search for a product"
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
