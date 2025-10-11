/**
 * Simple Dashboard Service
 * Fetches data directly from public JSON files
 */

class DashboardService {
  constructor() {
    // JSON file paths in public directory
    this.dataUrls = {
      dashboard: '/admin/data/dashboardData.json',
      droneOperators: '/admin/data/droneOperators.json',
      users: '/admin/data/users.json',
      employees: '/admin/data/employees.json',
      fieldAgents: '/admin/data/fieldAgents.json',
      jobs: '/admin/data/jobs.json',
      payments: '/admin/data/payments.json',
      reports: '/admin/data/reports.json',
      complaints: '/admin/data/complaints.json',
    };
  }

  /**
   * Fetch data from JSON file
   * @param {string} section - The section name for data file
   * @returns {Promise} - JSON data
   */
  async _fetchData(section = 'dashboard') {
    try {
      const dataUrl = this.dataUrls[section];
      if (!dataUrl) {
        throw new Error(`No data file found for section: ${section}`);
      }

      const response = await fetch(dataUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching ${section} data:`, error);
      // Return fallback data for the specific section
      return this._getFallbackData()[section] || {};
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
   * @returns {Promise} Dashboard data
   */
  async getDashboardData() {
    return await this._fetchData('dashboard');
  }

  /**
   * Get drone operators data
   * @returns {Promise} Drone operators data
   */
  async getDroneOperators() {
    return await this._fetchData('droneOperators');
  }

  /**
   * Get users data
   * @returns {Promise} Users data
   */
  async getUsers() {
    return await this._fetchData('users');
  }

  /**
   * Get employees data
   * @returns {Promise} Employees data
   */
  async getEmployees() {
    return await this._fetchData('employees');
  }

  /**
   * Get field agents data
   * @returns {Promise} Field agents data
   */
  async getFieldAgents() {
    return await this._fetchData('fieldAgents');
  }

  /**
   * Get jobs data
   * @returns {Promise} Jobs data
   */
  async getJobs() {
    return await this._fetchData('jobs');
  }

  /**
   * Get payments data
   * @returns {Promise} Payments data
   */
  async getPayments() {
    return await this._fetchData('payments');
  }

  /**
   * Get reports data
   * @returns {Promise} Reports data
   */
  async getReports() {
    return await this._fetchData('reports');
  }

  /**
   * Get complaints data
   * @returns {Promise} Complaints data
   */
  async getComplaints() {
    return await this._fetchData('complaints');
  }
}

// Export singleton instance
export default new DashboardService();
