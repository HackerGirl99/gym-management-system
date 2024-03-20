// LoginPage.js
import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [role, setRole] = useState('');
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const handleLogin = () => {
     if (role === 'admin' && adminUsername === 'admin' && adminPassword === '1234') {
      onLogin('admin');
    } else {
      alert('Invalid login credentials');
    }
  };
  const guestlogin=() => {
    onLogin('guest');
  }

  return (
    <div>
      <h1>Welcome to the Login Page</h1>
      
      <button onClick={guestlogin}>Login as Guest</button>
      <button onClick={() => setRole('admin')}>Login as Admin</button>
      
      {role === 'admin' && (
        <div>
          <h2>Admin Login</h2>
          <label htmlFor="adminUsername">Username: </label>
          <input type="text" id="adminUsername" onChange={(e) => setAdminUsername(e.target.value)} />
          <br />
          <label htmlFor="adminPassword">Password: </label>
          <input type="password" id="adminPassword" onChange={(e) => setAdminPassword(e.target.value)} />
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
