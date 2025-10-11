import { useState, useEffect } from 'react';
import dataFetcher from '../utils/dataFetcher';

/**
 * Custom hook for dashboard data management
 * Provides loading states, error handling, and data fetching
 */
export const useDashboardData = (section = 'dashboard') => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetching, setRefetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        let response;
        switch (section) {
          case 'dashboard':
            response = await dataFetcher.fetchDashboardData();
            break;
          case 'drone-operators':
            response = await dataFetcher.fetchDroneOperators();
            break;
          case 'users':
            response = await dataFetcher.fetchUsers();
            break;
          case 'employees':
            response = await dataFetcher.fetchEmployees();
            break;
          case 'field-agents':
            response = await dataFetcher.fetchFieldAgents();
            break;
          case 'jobs':
            response = await dataFetcher.fetchJobs();
            break;
          case 'payments':
            response = await dataFetcher.fetchPayments();
            break;
          case 'reports':
            response = await dataFetcher.fetchReports();
            break;
          case 'complaints':
            response = await dataFetcher.fetchComplaints();
            break;
          default:
            throw new Error(`Unknown section: ${section}`);
        }

        setData(response);
      } catch (err) {
        console.error(`Error fetching ${section} data:`, err);
        setError(err.message || 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [section]);

  const refetch = async () => {
    try {
      setRefetching(true);
      setError(null);

      let response;
      switch (section) {
        case 'dashboard':
          response = await dataFetcher.fetchDashboardData();
          break;
        case 'drone-operators':
          response = await dataFetcher.fetchDroneOperators();
          break;
        case 'users':
          response = await dataFetcher.fetchUsers();
          break;
        case 'employees':
          response = await dataFetcher.fetchEmployees();
          break;
        case 'field-agents':
          response = await dataFetcher.fetchFieldAgents();
          break;
        case 'jobs':
          response = await dataFetcher.fetchJobs();
          break;
        case 'payments':
          response = await dataFetcher.fetchPayments();
          break;
        case 'reports':
          response = await dataFetcher.fetchReports();
          break;
        case 'complaints':
          response = await dataFetcher.fetchComplaints();
          break;
        default:
          throw new Error(`Unknown section: ${section}`);
      }

      setData(response);
    } catch (err) {
      console.error(`Error refetching ${section} data:`, err);
      setError(err.message || 'Failed to fetch data');
    } finally {
      setRefetching(false);
    }
  };

  return {
    data,
    loading,
    error,
    refetching,
    refetch,
  };
};

/**
 * Hook specifically for dashboard overview data
 */
export const useDashboardOverview = () => {
  return useDashboardData('dashboard');
};

/**
 * Hook for any section data with standardized interface
 */
export const useSectionData = (section) => {
  return useDashboardData(section);
};
