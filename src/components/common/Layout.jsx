import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './Header';
import { useAuth } from '../../hooks/useAuth';
import UserNav from './UserNav';
import Footer from './Footer';
import { useLocation } from 'react-router';


export const Layout = ({ children }) => {
  const {user} = useAuth()
  const location = useLocation();

  return (
    <div className='flex flex-col min-h-screen bg-gray-50 w-full'>
      {user? <Header/>:<UserNav/>}
      <main className='flex-grow w-full flex flex-col'>{children}</main>
      {/* {user? "":<Footer/>} */}
      {!user && location.pathname !== '/loginpage' && location.pathname !== '/login'? <Footer/> : null}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
