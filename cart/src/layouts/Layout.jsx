import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { useShopContext } from 'contexts/ShopContext';
import CartItem from 'components/CartItem/CartItem';
import { Navbar, Form, DropdownButton, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

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
          placeholder="Search for a product"
          style={{ width: '30%', maxWidth: 500 }}
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
          <div
            className="d-flex flex-column align-items-center"
            style={{ gap: '1em' }}
          >
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
