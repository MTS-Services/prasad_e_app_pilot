import axiosInstance from '../config/axiosConfig';

/**
 * Dashboard API Service
 * This service handles all dashboard-related API calls
 * When backend is ready, only the endpoints need to be updated
 */

class DashboardService {
  constructor() {
    // Base endpoints - easily configurable for production
    this.endpoints = {
      dashboard: '/dashboard',
      droneOperators: '/drone-operators',
      users: '/users',
      employees: '/employees',
      fieldAgents: '/field-agents',
      jobs: '/jobs',
      payments: '/payments',
      reports: '/reports',
      complaints: '/complaints',
    };

    // For development, use mock data
    this.isDevelopment = import.meta.env.DEV;
    this.mockDataUrl = '/admin/data/dashboardData.json';
  }

  /**
   * Generic method to fetch data
   * @param {string} endpoint - The endpoint to fetch from
   * @param {object} params - Query parameters
   * @returns {Promise} - Axios response
   */
  async _fetchData(endpoint, params = {}) {
    try {
      if (this.isDevelopment) {
        // In development, fetch from mock JSON file with proper error handling
        try {
          const response = await fetch(this.mockDataUrl);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          return { data };
        } catch (fetchError) {
          console.warn(
            'Failed to fetch mock data, using fallback data:',
            fetchError
          );
          // Return fallback data if mock file is not available
          return { data: this._getFallbackData() };
        }
      } else {
        // In production, use actual API endpoints
        return await axiosInstance.get(endpoint, { params });
      }
    } catch (error) {
      console.error(`Error fetching data from ${endpoint}:`, error);
      // Return fallback data instead of throwing error
      return { data: this._getFallbackData() };
    }
  }

  /**
   * Fallback data when mock file is not available
   * @returns {object} Fallback dashboard data
   */
  _getFallbackData() {
    return {
      dashboard: {
        overview: {
          title: 'Dashboard Overview',
          subtitle: 'Monitor your platform performance and key metrics',
          stats: [
            {
              id: 'active-users',
              label: 'Active User',
              value: '2000',
              change: '+8.2% from last month',
              changeType: 'positive',
              icon: 'users',
            },
            {
              id: 'total-jobs',
              label: 'Total Jobs',
              value: '200',
              change: '+12% from last month',
              changeType: 'positive',
              icon: 'briefcase',
            },
            {
              id: 'revenue',
              label: 'Revenue',
              value: '$184,592',
              change: '+7% from last month',
              changeType: 'positive',
              icon: 'dollar',
            },
            {
              id: 'complaints',
              label: 'Complaints',
              value: '8',
              change: '-4% from last month',
              changeType: 'negative',
              icon: 'warning',
            },
          ],
          additionalStats: [
            {
              id: 'tickets',
              label: 'Ticket',
              value: '10',
              change: '+8.2% from last month',
              changeType: 'positive',
              icon: 'ticket',
            },
          ],
        },
        revenueChart: {
          title: 'Last 7 days revenue',
          data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
              {
                label: 'Revenue',
                data: [450, 500, 420, 600, 550, 480, 620],
                borderColor: '#10B981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                fill: true,
                tension: 0.4,
              },
            ],
          },
        },
        recentActivity: {
          title: 'Recent User Activity',
          headers: [
            'User',
            'Role',
            'Job title',
            'Status',
            'Last Active',
            'Actions',
          ],
          data: [
            {
              id: 1,
              user: 'Jacob Jones',
              role: 'Customer',
              jobTitle: 'Drone Service Not Arriving on Scheduled Time',
              status: 'Completed',
              statusType: 'success',
              lastActive: '2 minutes ago',
            },
            {
              id: 2,
              user: 'Floyd Miles',
              role: 'Operator',
              jobTitle: 'Inaccurate Information in Soil Analysis Results',
              status: 'In Progress',
              statusType: 'warning',
              lastActive: '22 minutes ago',
            },
          ],
          pagination: {
            current: 1,
            total: 106,
            showing: 'Showing 6 of 106 Users',
            hasNext: true,
            hasPrevious: false,
          },
        },
      },
      droneOperators: {
        title: 'Drone Operators',
        stats: [
          {
            label: 'Total Operators',
            value: '45',
            change: '+5.2%',
            changeType: 'positive',
            icon: 'users',
          },
        ],
        operators: [],
      },
      users: {
        title: 'User Management',
        stats: [
          {
            label: 'Total Users',
            value: '2,456',
            change: '+12.5%',
            changeType: 'positive',
            icon: 'users',
          },
        ],
        users: [],
      },
      employees: {
        title: 'Employee Management',
        stats: [
          {
            label: 'Total Employees',
            value: '89',
            change: '+4.2%',
            changeType: 'positive',
            icon: 'users',
          },
        ],
        employees: [],
      },
      fieldAgents: {
        title: 'Field Agents',
        stats: [
          {
            label: 'Total Agents',
            value: '34',
            change: '+6.1%',
            changeType: 'positive',
            icon: 'users',
          },
        ],
        agents: [],
      },
      jobs: {
        title: 'Jobs Management',
        stats: [
          {
            label: 'Total Jobs',
            value: '1,234',
            change: '+15.3%',
            changeType: 'positive',
            icon: 'briefcase',
          },
        ],
        jobs: [],
      },
      payments: {
        title: 'Payments Management',
        stats: [
          {
            label: 'Total Revenue',
            value: '$184,592',
            change: '+18.2%',
            changeType: 'positive',
            icon: 'dollar',
          },
        ],
        payments: [],
      },
      reports: {
        title: 'Reports & Analytics',
        stats: [
          {
            label: 'Total Reports',
            value: '456',
            change: '+8.9%',
            changeType: 'positive',
            icon: 'briefcase',
          },
        ],
        reports: [],
      },
      complaints: {
        title: 'Complaints Management',
        stats: [
          {
            label: 'Open Complaints',
            value: '8',
            change: '-12.5%',
            changeType: 'negative',
            icon: 'warning',
          },
        ],
        complaints: [],
      },
    };
  }

  /**
   * Get dashboard overview data
   * @param {object} filters - Optional filters
   * @returns {Promise} Dashboard data
   */
  async getDashboardData(filters = {}) {
    const response = await this._fetchData(this.endpoints.dashboard, filters);
    return this.isDevelopment ? response.data : response.data;
  }

  /**
   * Get drone operators data
   * @param {object} params - Query parameters (page, limit, search, etc.)
   * @returns {Promise} Drone operators data
   */
  async getDroneOperators(params = {}) {
    const response = await this._fetchData(
      this.endpoints.droneOperators,
      params
    );
    return this.isDevelopment ? response.data.droneOperators : response.data;
  }

  /**
   * Get users data
   * @param {object} params - Query parameters
   * @returns {Promise} Users data
   */
  async getUsers(params = {}) {
    const response = await this._fetchData(this.endpoints.users, params);
    return this.isDevelopment ? response.data.users : response.data;
  }

  /**
   * Get employees data
   * @param {object} params - Query parameters
   * @returns {Promise} Employees data
   */
  async getEmployees(params = {}) {
    const response = await this._fetchData(this.endpoints.employees, params);
    return this.isDevelopment ? response.data.employees : response.data;
  }

  /**
   * Get field agents data
   * @param {object} params - Query parameters
   * @returns {Promise} Field agents data
   */
  async getFieldAgents(params = {}) {
    const response = await this._fetchData(this.endpoints.fieldAgents, params);
    return this.isDevelopment ? response.data.fieldAgents : response.data;
  }

  /**
   * Get jobs data
   * @param {object} params - Query parameters
   * @returns {Promise} Jobs data
   */
  async getJobs(params = {}) {
    const response = await this._fetchData(this.endpoints.jobs, params);
    return this.isDevelopment ? response.data.jobs : response.data;
  }

  /**
   * Get payments data
   * @param {object} params - Query parameters
   * @returns {Promise} Payments data
   */
  async getPayments(params = {}) {
    const response = await this._fetchData(this.endpoints.payments, params);
    return this.isDevelopment ? response.data.payments : response.data;
  }

  /**
   * Get reports data
   * @param {object} params - Query parameters
   * @returns {Promise} Reports data
   */
  async getReports(params = {}) {
    const response = await this._fetchData(this.endpoints.reports, params);
    return this.isDevelopment ? response.data.reports : response.data;
  }

  /**
   * Get complaints data
   * @param {object} params - Query parameters
   * @returns {Promise} Complaints data
   */
  async getComplaints(params = {}) {
    const response = await this._fetchData(this.endpoints.complaints, params);
    return this.isDevelopment ? response.data.complaints : response.data;
  }

  /**
   * Update production endpoints
   * Call this method when switching to production backend
   * @param {object} newEndpoints - New endpoint URLs
   */
  updateEndpoints(newEndpoints) {
    this.endpoints = { ...this.endpoints, ...newEndpoints };
    this.isDevelopment = false;
  }
}

// Export singleton instance
export default new DashboardService();
