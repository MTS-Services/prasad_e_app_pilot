import { useState, useEffect } from 'react';
import dashboardService from '../services/dashboardService';

/**
 * Custom hook for dashboard data management
 * Provides loading states, error handling, and data fetching
 */
export const useDashboardData = (section = 'dashboard', params = {}) => {
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
            response = await dashboardService.getDashboardData(params);
            break;
          case 'drone-operators':
            response = await dashboardService.getDroneOperators(params);
            break;
          case 'users':
            response = await dashboardService.getUsers(params);
            break;
          case 'employees':
            response = await dashboardService.getEmployees(params);
            break;
          case 'field-agents':
            response = await dashboardService.getFieldAgents(params);
            break;
          case 'jobs':
            response = await dashboardService.getJobs(params);
            break;
          case 'payments':
            response = await dashboardService.getPayments(params);
            break;
          case 'reports':
            response = await dashboardService.getReports(params);
            break;
          case 'complaints':
            response = await dashboardService.getComplaints(params);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section]); // Only depend on section to avoid infinite loops when params is an object literal

  const refetch = async () => {
    try {
      setRefetching(true);
      setError(null);

      let response;
      switch (section) {
        case 'dashboard':
          response = await dashboardService.getDashboardData(params);
          break;
        case 'drone-operators':
          response = await dashboardService.getDroneOperators(params);
          break;
        case 'users':
          response = await dashboardService.getUsers(params);
          break;
        case 'employees':
          response = await dashboardService.getEmployees(params);
          break;
        case 'field-agents':
          response = await dashboardService.getFieldAgents(params);
          break;
        case 'jobs':
          response = await dashboardService.getJobs(params);
          break;
        case 'payments':
          response = await dashboardService.getPayments(params);
          break;
        case 'reports':
          response = await dashboardService.getReports(params);
          break;
        case 'complaints':
          response = await dashboardService.getComplaints(params);
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
export const useDashboardOverview = (filters = {}) => {
  return useDashboardData('dashboard', filters);
};

/**
 * Hook for any section data with standardized interface
 */
export const useSectionData = (section, params = {}) => {
  return useDashboardData(section, params);
};
