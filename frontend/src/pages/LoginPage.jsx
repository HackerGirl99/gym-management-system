import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import Meta from '../components/Meta';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector(state => state.auth);

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const redirect = searchParams.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate();
    }
  }, [userInfo, redirect, navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = async e => {
    e.preventDefault();
    try {
      const res = await login({ email, password, remember }).unwrap();
      dispatch(setCredentials({ ...res }));
      
      // Check for admin role in response data (replace 'role' with actual field name)
      if (res.isAdmin) {
        navigate('/admin/dashboard');
      }
       else {
        navigate(redirect);  // Redirect to normal user dashboard
      }
      toast.success('Login successful');
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };
  return (
    <FormContainer>
      
      <Meta   title={'Sign In'} />
      <h1 className='mt-4 mb-3 text-5xl leading-normal font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500'>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group  className='mb-3' controlId='email'>
          <Form.Label className="block text-m font-medium text-gray-700">Email address</Form.Label>
          <Form.Control
            type='email'
            value={email}
            placeholder='Enter email'
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='password'>
          <Form.Label className="block text-m font-medium text-gray-700">Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              value={password}
              placeholder='Enter password'
              onChange={e => setPassword(e.target.value)}
            />
            <InputGroup.Text
              onClick={togglePasswordVisibility}
              id='togglePasswordVisibility'
              style={{ cursor: 'pointer' }}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className='mb-3' controlId='checkbox'>
              <Form.Check
                type='checkbox'
                label='Keep me signed in.'
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
            </Form.Group>
          </Col>
          <Col className='text-end'>
            <Link to={'/reset-password'} className=' mx-2'>
              Forgot password?
            </Link>
          </Col>
        </Row>
        <Button
           className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          variant='warning'
          type='submit'
          disabled={isLoading}
        >
          Sign In
        </Button>
      </Form>
      <Row>
        <Col>
          New to Gym?
          <Link
            to={redirect ? `/register?redirect=${redirect}` : '/register'}
            className=' mx-2'
          >
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginPage;


// import React, { useState } from "react";
// import { Link, json } from "react-router-dom"; // Assuming you're using React Router for navigation

// import Header from '../components/common/Header';
// import Footer from '../components/common/Footer';

// import { navLinks } from '../assets/data/HeaderData';
// import { socialLinks, contactData } from '../assets/data/FooterData';
// import { axiosGet, axiosPost } from "../AxiosOperations";
// import Profile from "../pages/Donar/Profile";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");




//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Perform validation
//     if (!email || !password) {
//       setError("Please fill in all fields");
//       return;
//     }

//     // Clear form fields and errors after successful login
//     setEmail("");
//     setPassword("");
//     setError("");
//   };

//   const userLogin = async () => {

//     try {
//       if (email && password) {
//         await axiosPost('donor/login', { email: email, password: password })
//           .then((data) => {

//             if ([data.data][0].success === true &&[data.data][0].role=== 'donor' ) {
//               navigate(/profile?id=${encodeURIComponent([data.data][0].id)});
//             } else if([data.data][0].success === true &&[data.data][0].role=== 'admin' ) {
//               navigate(/admin/profile?id=${encodeURIComponent([data.data][0].id)});
//             }else{
//               alert([data.data][0].message);
//             }
//           }



//           )
//       } else {
//         alert("You must enter all feilds");
//       }

//     } catch (error) {
//       alert(error.response.data.message);
//     }


//   }


//   return (
//     <div>
//       <div>
//         <Header navLinks={navLinks} />
//       </div>
//       <div className="min-h-screen flex pt-[100px] justify-center  py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-md w-full space-y-8">
//           <div>
//             <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//               LOGIN
//             </h2>
//           </div>
//           <form className="mt-8 space-y-6" onSubmit={handleLogin}>
//             <div className="rounded-md shadow-sm -space-y-px">
//               <div className="m-[10px]">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                   placeholder="Email address"
//                 />
//               </div>
//               <div className="m-[10px]">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                   placeholder="Password"
//                 />
//               </div>
//             </div>

//             {error && <p className="text-red-500 text-xs mt-2">{error}</p>}

//             <div className="m-[10px]">
//               <button
//                 type="submit"
//                 className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 onClick={userLogin}
//                 style={{ backgroundColor: '#BC005A', border: '2px solid white' }}
//               >
//                 LOGIN
//               </button>
//             </div>
//           </form>

//           <div className="text-center">
//             <Link to="/forgot-password" className="text-sm text-pink-600 hover:text-red-500">
//               Forgot your password?
//             </Link>
//           </div>

//           <div className="text-center">
//             <p className="text-sm text-gray-600">Don't have an account? <Link to="/register" className="font-medium text-pink-600 hover:text-red-500">Register</Link></p>
//           </div>
//         </div>
//       </div>

//       <div>
//         <Footer navLinks1={socialLinks} navLinks2={contactData} />
//       </div>
//     </div>
//   );
// };

// export default Login;