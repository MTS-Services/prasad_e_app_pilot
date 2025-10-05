import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import NotAuthorizedPage from './pages/NotAuthorizedPage';
import NotFoundPage from './pages/NotFoundPage';
import { Layout } from './components/common/Layout';
import { useRequireAuth } from './hooks/useRequireAuth';
import MainLayout from './LandingPageUI/Layout/MainLayout';
import Services from './LandingPageUI/Pages/Services';
import About from './LandingPageUI/Pages/About';
import Contact  from './LandingPageUI/Pages/Contact';

function App() {
  // Protect the DashboardPage route
  const ProtectedDashboard = useRequireAuth(DashboardPage);

  return (
    <div className='w-full min-h-screen'>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<MainLayout/>} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/login' element={<LoginPage />} />

          {/* Protected Routes */}
          <Route path='/dashboard' element={<ProtectedDashboard />} />
          <Route path='/unauthorized' element={<NotAuthorizedPage />} />

          {/* Catch-all Route for 404 Not Found */}
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
