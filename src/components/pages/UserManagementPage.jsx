import React from 'react';
import StatsCard from '../common/StatsCard';
import LoadingSpinner from '../common/LoadingSpinner';
import { useSectionData } from '../../hooks/useDashboardData';

const UserManagementPage = () => {
  const { data, loading, error } = useSectionData('users');

  if (loading) {
    return (
      <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
        <div className='text-center'>
          <p className='text-red-600 mb-4'>Error loading user data</p>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50 w-full'>
      <div className='w-full px-4 sm:px-6 lg:px-8 py-6'>
        {/* Header */}
        <div className='mb-6'>
          <h1 className='text-2xl font-semibold text-gray-900'>
            {data?.title || 'User Management'}
          </h1>
          <p className='text-gray-600 mt-1'>
            Manage and monitor platform users
          </p>
        </div>

        {/* Stats Grid */}
        {data?.stats && (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
            {data.stats.map((stat, index) => (
              <StatsCard key={index} stat={stat} />
            ))}
          </div>
        )}

        {/* Users Content */}
        <div className='bg-white rounded-xl shadow-sm'>
          <div className='p-6 border-b border-gray-200'>
            <h3 className='text-lg font-semibold text-gray-900'>
              Users Overview
            </h3>
          </div>
          <div className='p-6'>
            <p className='text-gray-500 text-center py-8'>
              User management interface will be implemented here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagementPage;
