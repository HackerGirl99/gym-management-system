// import React, { useEffect, useState } from 'react';
// import { Form, Button, InputGroup, Card } from 'react-bootstrap';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { useDispatch, useSelector } from 'react-redux';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useLoginMutation } from '../../slices/usersApiSlice';
// import { setCredentials } from '../../slices/authSlice';
// import { toast, ToastContainer } from 'react-toastify';
// import FormContainer from '../../components/FormContainer';
// import Meta from '../../components/Meta';
// import Footer from '../../components/Footer';
// import Loader from '../../components/Loader';

// const AdminLoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [remember, setRemember] = useState(false);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { userInfo } = useSelector(state => state.auth);

//   const { search } = useLocation();
//   const searchParams = new URLSearchParams(search);
//   const redirect = searchParams.get('redirect') || '/admin/dashboard';

//   const [login, { isLoading }] = useLoginMutation();

//   useEffect(() => {
//     if (userInfo && userInfo.isAdmin) {
//       navigate(redirect);
//     }
//   }, [userInfo, redirect, navigate]);

//   const submitHandler = async e => {
//     e.preventDefault();
//     try {
//       const res = await login({ email, password, remember }).unwrap();
//       dispatch(setCredentials({ ...res }));
//       navigate('/admin/dashboard');
//       toast.success('Login successful');
//     } catch (error) {
//       toast.error(error?.data?.message || error.error);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <>
//       <main className='d-flex position-relative flex-column justify-content-center align-items-center '>
//         <Meta title={'Admin Sign In'} />
//         <FormContainer>
//           <Card className='p-3 p-md-5 '>
//             <h1 className='mt-4 mb-5 text-center text-5xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500' >Sign In</h1>
//             <Form onSubmit={submitHandler}>
//               <Form.Group className='mb-3' controlId='email'>
//                 <Form.Label className="block text-m font-medium text-gray-700">Email address</Form.Label>
//                 <Form.Control
//                   type='email'
//                   value={email}
//                   placeholder='Enter email'
//                   onChange={e => setEmail(e.target.value)}
//                 />
//               </Form.Group>
//               <Form.Group className='mb-3' controlId='password'>
//                 <Form.Label className="block text-m font-medium text-gray-700">Password</Form.Label>
//                 <InputGroup>
//                   <Form.Control
//                     type={showPassword ? 'text' : 'password'}
//                     value={password}
//                     placeholder='Enter password'
//                     onChange={e => setPassword(e.target.value)}
//                   />
//                   <InputGroup.Text
//                     onClick={togglePasswordVisibility}
//                     id='togglePasswordVisibility'
//                     style={{ cursor: 'pointer' }}
//                   >
//                     {showPassword ? <FaEye /> : <FaEyeSlash />}
//                   </InputGroup.Text>
//                 </InputGroup>
//               </Form.Group>
//               <Form.Group className='mb-3' controlId='checkbox'>
//                 <Form.Check
//                   type='checkbox'
//                   label='Keep me signed in.'
//                   checked={remember}
//                   onChange={() => setRemember(!remember)}
//                 />
//               </Form.Group>
//               <Button
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 variant='warning'
//                 type='submit'
//                 disabled={isLoading}
//               >
//                 Sign In
//               </Button>
//             </Form>
//           </Card>
//         </FormContainer>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default AdminLoginPage;
