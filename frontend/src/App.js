import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
  HomePage, 
  LoginPage, 
  SignupPage,
  ContactUs,
  Gallery,
  Leaderboard,

} from './routes/Routes';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;