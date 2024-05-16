import React from 'react';
import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'UOV GYM | Online GYM Booking',
  description:
    'You can reserve Gym Equipment by online.',
  keywords:
    'electronics, gadgets, smartphones, laptops, online booking, tech accessories'
};

export default Meta;
