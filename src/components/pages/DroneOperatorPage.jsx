import React from 'react';
import StatsCard from '../common/StatsCard';
import LoadingSpinner from '../common/LoadingSpinner';
import { useSectionData } from '../../hooks/useDashboardData';

const DroneOperatorPage = () => {
  const { data, loading, error } = useSectionData('drone-operators');

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
          <p className='text-red-600 mb-4'>
            Error loading drone operators data
          </p>
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
            {data?.title || 'Drone Operators'}
          </h1>
          <p className='text-gray-600 mt-1'>
            Manage and monitor drone operators
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

        {/* Operators List */}
        <div className='bg-white rounded-xl shadow-sm'>
          <div className='p-6 border-b border-gray-200'>
            <h3 className='text-lg font-semibold text-gray-900'>Operators</h3>
          </div>
          <div className='p-6'>
            {data?.operators?.length > 0 ? (
              <div className='space-y-4'>
                {data.operators.map((operator) => (
                  <div
                    key={operator.id}
                    className='border border-gray-200 rounded-lg p-4'
                  >
                    <div className='flex items-center justify-between'>
                      <div>
                        <h4 className='font-medium text-gray-900'>
                          {operator.name}
                        </h4>
                        <p className='text-sm text-gray-600'>
                          {operator.email}
                        </p>
                      </div>
                      <div className='text-right'>
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            operator.status === 'Active'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {operator.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className='text-gray-500 text-center py-8'>
                No operators data available
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroneOperatorPage;
