import React, { useEffect, useState } from 'react';
import FormContainer from '../../components/FormContainer';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  useUpdateUserMutation,
  useGetUserByIdQuery
} from '../../slices/usersApiSlice';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import Meta from '../../components/Meta';

const UpdateUserFormPage = () => {
  const { id: userId } = useParams();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const { data: user, isLoading, error } = useGetUserByIdQuery(userId);

  const [updateUser, { isLoading: isUpdateUserLoading }] =
    useUpdateUserMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
      setUserType(user.userType);
    }
  }, [user]);

  const submitHandler = async e => {
    e.preventDefault();
    try {
      const userData = { name, email, isAdmin };
      const { data } = await updateUser({ userId, ...userData });
      toast.success(data.message);
      navigate('/admin/user-list');
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };
  return (
    <>
      <Meta title={'User Update Form'} />

      <Link to='/admin/user-list' className='btn btn-light my-3'>
        Go Back
      </Link>
      {isUpdateUserLoading && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <FormContainer>
          <Meta title={'Update User'} />
          <h1 className="mt-4 mb-3 text-4xl leading-normal font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500">Update user</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group className='mb-3' controlId='name'>
              <Form.Label className="block text-m font-medium text-gray-700">Name</Form.Label>
              <Form.Control
                value={name}
                type='text'
                placeholder='Enter name'
                onChange={e => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="userType">
          <Form.Label className="block text-m font-medium text-gray-700">
            Are You
          </Form.Label>
          <Form.Select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="STUDENT">Student</option>
            <option value="STAFF">Staff</option>
          </Form.Select>
        </Form.Group>
            <Form.Group className='mb-3' controlId='email'>
              <Form.Label className="block text-m font-medium text-gray-700">Email address</Form.Label>
              <Form.Control
                value={email}
                type='email'
                placeholder='Enter email'
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="block text-m mb-3 font-medium text-gray-700" controlId='isAdmin'>
              <Form.Check
                type='checkbox'
                label='is Admin'
                checked={isAdmin}
                onChange={e => setIsAdmin(e.target.checked)}
              />
            </Form.Group>

            <Button className='mb-3' variant='primary' type='submit'>
              Update
            </Button>
          </Form>
        </FormContainer>
      )}
    </>
  );
};

export default UpdateUserFormPage;
