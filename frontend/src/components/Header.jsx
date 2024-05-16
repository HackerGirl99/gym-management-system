import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Badge, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { toast } from 'react-toastify';


const Header = () => {
  //const { cartItems } = useSelector(state => state.cart);
  const { userInfo } = useSelector(state => state.auth);
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());

      navigate('/login');
      toast.success('Logout successful');
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <Navbar
      bg='dark'
      variant='dark'
      expand='md'
      collapseOnSelect
      className='fixed-top z-2 '
    >
      <Container>
    
        <LinkContainer to='/'>
          <Navbar.Brand>
          <img
            src="images/logouovgym.png"
            alt="logo"
          />
          </Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto m-2'>
            
    
            <LinkContainer to='/'>
              <Nav.Link>
              Home
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to='/contact'>
              <Nav.Link>
              Contact Us
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/gallery'>
              <Nav.Link>
              Gallery
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/leaderboard'>
              <Nav.Link>
              Leaderboard
              </Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown title={`Hello👋, ${userInfo.name}`} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/booking'>
                  <NavDropdown.Item>Booking</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to='/login'>
                <Nav.Link>
                  <FaUser style={{ marginRight: '5px' }} />
                  Sign In
                </Nav.Link>
              </LinkContainer>
            )}
            {/* {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/product-list'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/order-list'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/user-list'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )} */}
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
};

export default Header;
