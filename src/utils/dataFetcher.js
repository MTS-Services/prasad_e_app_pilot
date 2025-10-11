import axios from 'axios';

/**
 * Simple data fetcher for public JSON files
 * Fetches data directly from public/admin/data directory
 */

const DATA_BASE_URL = '/admin/data';

/**
 * Generic function to fetch data from JSON files
 * @param {string} fileName - Name of the JSON file (without extension)
 * @returns {Promise} - Axios response data
 */
export const fetchData = async (fileName) => {
  try {
    const response = await axios.get(`${DATA_BASE_URL}/${fileName}.json`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${fileName} data:`, error);
    throw error;
  }
};

/**
 * Fetch dashboard data
 * @returns {Promise} Dashboard data
 */
export const fetchDashboardData = () => fetchData('dashboardData');

/**
 * Fetch drone operators data
 * @returns {Promise} Drone operators data
 */
export const fetchDroneOperators = () => fetchData('droneOperators');

/**
 * Fetch users data
 * @returns {Promise} Users data
 */
export const fetchUsers = () => fetchData('users');

/**
 * Fetch employees data
 * @returns {Promise} Employees data
 */
export const fetchEmployees = () => fetchData('employees');

/**
 * Fetch field agents data
 * @returns {Promise} Field agents data
 */
export const fetchFieldAgents = () => fetchData('fieldAgents');

/**
 * Fetch jobs data
 * @returns {Promise} Jobs data
 */
export const fetchJobs = () => fetchData('jobs');

/**
 * Fetch payments data
 * @returns {Promise} Payments data
 */
export const fetchPayments = () => fetchData('payments');

/**
 * Fetch reports data
 * @returns {Promise} Reports data
 */
export const fetchReports = () => fetchData('reports');

/**
 * Fetch complaints data
 * @returns {Promise} Complaints data
 */
export const fetchComplaints = () => fetchData('complaints');

// Export all functions as default object for easy importing
export default {
  fetchDashboardData,
  fetchDroneOperators,
  fetchUsers,
  fetchEmployees,
  fetchFieldAgents,
  fetchJobs,
  fetchPayments,
  fetchReports,
  fetchComplaints,
  fetchData, // Generic function
};
