import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './Header';
import { useAuth } from '../../hooks/useAuth';
import UserNav from './UserNav';
import Footer from './Footer';


export const Layout = ({ children }) => {
  const {user} = useAuth()
  return (
    <div className='flex flex-col min-h-screen bg-gray-50 w-full'>
      {user?.role!=='user'? <UserNav/>:<Header/>}
      <main className='flex-grow w-full flex flex-col'>{children}</main>
      {user?.role!=='user'? <Footer/>:""}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
