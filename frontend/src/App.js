import React, { useState } from 'react';
import UserLayout from './Layout/UserLayout';  
import AdminLayout from './Layout/Admin';  
import UserContext from './UserContext';


const App = () => {
  const [userRole, setUserRole] = useState('guest');
  
  return (
    <div>
      <UserContext.Provider value={[userRole,setUserRole]}>
        {userRole === 'guest' && <UserLayout />}
        {userRole === 'admin' && <AdminLayout />}
      </UserContext.Provider>
        
    </div>
  );
};

export default App;