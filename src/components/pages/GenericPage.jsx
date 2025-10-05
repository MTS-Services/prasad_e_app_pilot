import React from 'react';
import StatsCard from '../common/StatsCard';
import LoadingSpinner from '../common/LoadingSpinner';
import { useSectionData } from '../../hooks/useDashboardData';

const GenericPage = ({
  section,
  title,
  subtitle = 'Manage and monitor data',
  statsColumns = 3,
}) => {
  const { data, loading, error } = useSectionData(section);

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
            Error loading {title.toLowerCase()} data
          </p>
        </div>
      </div>
    );
  }

  const gridCols = statsColumns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4';

  return (
    <div className='min-h-screen bg-gray-50 w-full'>
      <div className='w-full px-4 sm:px-6 lg:px-8 py-6'>
        {/* Header */}
        <div className='mb-6'>
          <h1 className='text-2xl font-semibold text-gray-900'>
            {data?.title || title}
          </h1>
          <p className='text-gray-600 mt-1'>{subtitle}</p>
        </div>

        {/* Stats Grid */}
        {data?.stats && (
          <div className={`grid grid-cols-1 ${gridCols} gap-6 mb-8`}>
            {data.stats.map((stat, index) => (
              <StatsCard key={index} stat={stat} />
            ))}
          </div>
        )}

        {/* Content Area */}
        <div className='bg-white rounded-xl shadow-sm'>
          <div className='p-6 border-b border-gray-200'>
            <h3 className='text-lg font-semibold text-gray-900'>
              {title} Overview
            </h3>
          </div>
          <div className='p-6'>
            <p className='text-gray-500 text-center py-8'>
              {title} interface will be implemented here. Data structure is
              ready for backend integration.
            </p>
            {data && (
              <div className='mt-4 p-4 bg-gray-50 rounded-lg'>
                <p className='text-sm text-gray-600 mb-2'>
                  Available data structure:
                </p>
                <pre className='text-xs text-gray-700 bg-white p-2 rounded border overflow-x-auto'>
                  {JSON.stringify(data, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericPage;
