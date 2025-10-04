import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-50 w-full'>
      <Header />
      <main className='flex-grow w-full flex flex-col'>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
