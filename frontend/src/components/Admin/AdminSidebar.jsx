import React from 'react';
import { Nav } from 'react-bootstrap';
import {
  FaCartShopping,
  FaCircleUser,
  FaGauge,
  FaPowerOff,
  FaTable,
  FaUserGroup,
  FaUsers
} from 'react-icons/fa6';
import { LinkContainer } from 'react-router-bootstrap';
import { useLogoutMutation } from '../../slices/usersApiSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../slices/authSlice';
import { toast } from 'react-toastify';

const Sidebar = () => {
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
  
      // Redirect to the login page without specifying 'admin'
      navigate('/login');
      toast.success('Logout successful');
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };
  
  return (
    <>
    
    
      <div className="p-4 ">
      <LinkContainer to='/admin/dashboard' className='mb-2'>
        <Nav.Link>
          <strong>
            <FaGauge
              style={{ marginRight: '10px', marginBottom: '3px' }}
              size={16}
            />
            Dashboard
          </strong>
        </Nav.Link>
      </LinkContainer>
      <LinkContainer to='/admin/equipment-list' className='mb-2'>
        <Nav.Link>
          <strong>
            <FaTable
              style={{ marginRight: '10px', marginBottom: '3px' }}
              size={16}
            />
            Equipments
          </strong>
        </Nav.Link>
      </LinkContainer>
      <LinkContainer to='/admin/reservation-list' className='mb-2'>
        <Nav.Link>
          <strong>
            <FaCartShopping
              style={{ marginRight: '10px', marginBottom: '3px' }}
              size={16}
            />
            Reservation
          </strong>
        </Nav.Link>
      </LinkContainer>
      <LinkContainer to='/admin/user-list' className='mb-2'>
        <Nav.Link>
          <strong>
            <FaUsers
              style={{ marginRight: '10px', marginBottom: '3px' }}
              size={16}
            />
            Users
          </strong>
        </Nav.Link>
      </LinkContainer>
      <LinkContainer to='/admin/user-log' className='mb-2'>
        <Nav.Link>
          <strong>
            <FaUsers
              style={{ marginRight: '10px', marginBottom: '3px' }}
              size={16}
            />
            Users Attendence
          </strong>
        </Nav.Link>
      </LinkContainer>
      <LinkContainer to='/admin/admin-list' className='mb-2'>
        <Nav.Link>
          <strong>
            <FaUserGroup
              style={{ marginRight: '10px', marginBottom: '3px' }}
              size={16}
            />
            Admins
          </strong>
        </Nav.Link>
      </LinkContainer>
      <LinkContainer to='/admin/profile' className='mb-2'>
        <Nav.Link>
          <strong>
            <FaCircleUser
              style={{ marginRight: '10px', marginBottom: '3px' }}
              size={16}
            />
            Profile
          </strong>
        </Nav.Link>
      </LinkContainer>
      <Nav.Link onClick={logoutHandler}>
        <strong>
          <FaPowerOff
            style={{ marginRight: '10px', marginBottom: '3px' }}
            size={16}
          />
          Logout
        </strong>
      </Nav.Link>
      
      </div>
    </>
  );
};

export default Sidebar;
