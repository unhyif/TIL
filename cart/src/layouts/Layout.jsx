import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navbar, Form, DropdownButton, Dropdown } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const Layout = () => (
  <>
    <Navbar bg="dark" className="d-flex justify-content-between py-3 px-4">
      <Link to="/" style={{ fontSize: '1.5em', color: 'white' }}>
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
            Cart
          </>
        }
        variant="success"
        align="end"
      >
        <Dropdown.Item href="#/action-1">Empty</Dropdown.Item>
      </DropdownButton>
    </Navbar>

    <Outlet />
  </>
);

export default Layout;
