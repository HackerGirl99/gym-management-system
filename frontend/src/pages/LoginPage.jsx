import React from "react";
import Login from "../components/Login/Login.jsx";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const LoginPage = () => {
  return (
    <div>
    <Header></Header>
    <Login/>
    <Footer />
    </div>
  )
}

export default LoginPage;