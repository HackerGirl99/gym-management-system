import React from 'react';
import FormContainer from '../../components/FormContainer';
import ProfileForm from '../../components/ProfileForm';
import Meta from '../../components/Meta';

const AdminProfilePage = () => {
  return (
    <FormContainer>
      <Meta title={'Admin Profile'} />
      <h2 className="text-5xl leading-normal font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500">Admin Profile</h2>
      <ProfileForm />
    </FormContainer>
  );
};

export default AdminProfilePage;
