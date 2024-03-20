import React from 'react'
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import AddNewUserForm from "../components/Admin/AdminStaff";
const  AdminStaffPage = () => {
  return (
    <div>
        <Header activeHeading={4} />
        <AddNewUserForm></AddNewUserForm>
        <Footer />
    </div>
  )
}

export default AdminStaffPage