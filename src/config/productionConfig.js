/**
 * Configuration service for production deployment
 * Use this to easily switch from mock data to real API endpoints
 */

import dashboardService from '../services/dashboardService';

class ProductionConfig {
  constructor() {
    this.isProduction = import.meta.env.PROD;
    this.apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  }

  /**
   * Switch to production mode with real API endpoints
   * Call this method when your backend is ready
   *
   * @param {string} baseUrl - Your production API base URL
   * @param {object} customEndpoints - Custom endpoint mappings if different from defaults
   */
  enableProductionMode(baseUrl, customEndpoints = {}) {
    const productionEndpoints = {
      dashboard: `${baseUrl}/dashboard/overview`,
      droneOperators: `${baseUrl}/drone-operators`,
      users: `${baseUrl}/users`,
      employees: `${baseUrl}/employees`,
      fieldAgents: `${baseUrl}/field-agents`,
      jobs: `${baseUrl}/jobs`,
      payments: `${baseUrl}/payments`,
      reports: `${baseUrl}/reports`,
      complaints: `${baseUrl}/complaints`,
      ...customEndpoints, // Allow custom overrides
    };

    // Update the dashboard service with production endpoints
    dashboardService.updateEndpoints(productionEndpoints);

    console.log(
      '✅ Production mode enabled with endpoints:',
      productionEndpoints
    );
  }

  /**
   * Quick setup for common backend configurations
   */
  setupForBackend(backendType, baseUrl) {
    const configurations = {
      'node-express': {
        dashboard: `${baseUrl}/api/v1/dashboard`,
        droneOperators: `${baseUrl}/api/v1/drone-operators`,
        users: `${baseUrl}/api/v1/users`,
        employees: `${baseUrl}/api/v1/employees`,
        fieldAgents: `${baseUrl}/api/v1/field-agents`,
        jobs: `${baseUrl}/api/v1/jobs`,
        payments: `${baseUrl}/api/v1/payments`,
        reports: `${baseUrl}/api/v1/reports`,
        complaints: `${baseUrl}/api/v1/complaints`,
      },
      'django-rest': {
        dashboard: `${baseUrl}/api/dashboard/`,
        droneOperators: `${baseUrl}/api/drone-operators/`,
        users: `${baseUrl}/api/users/`,
        employees: `${baseUrl}/api/employees/`,
        fieldAgents: `${baseUrl}/api/field-agents/`,
        jobs: `${baseUrl}/api/jobs/`,
        payments: `${baseUrl}/api/payments/`,
        reports: `${baseUrl}/api/reports/`,
        complaints: `${baseUrl}/api/complaints/`,
      },
      laravel: {
        dashboard: `${baseUrl}/api/dashboard`,
        droneOperators: `${baseUrl}/api/drone-operators`,
        users: `${baseUrl}/api/users`,
        employees: `${baseUrl}/api/employees`,
        fieldAgents: `${baseUrl}/api/field-agents`,
        jobs: `${baseUrl}/api/jobs`,
        payments: `${baseUrl}/api/payments`,
        reports: `${baseUrl}/api/reports`,
        complaints: `${baseUrl}/api/complaints`,
      },
      'spring-boot': {
        dashboard: `${baseUrl}/api/v1/dashboard`,
        droneOperators: `${baseUrl}/api/v1/drone-operators`,
        users: `${baseUrl}/api/v1/users`,
        employees: `${baseUrl}/api/v1/employees`,
        fieldAgents: `${baseUrl}/api/v1/field-agents`,
        jobs: `${baseUrl}/api/v1/jobs`,
        payments: `${baseUrl}/api/v1/payments`,
        reports: `${baseUrl}/api/v1/reports`,
        complaints: `${baseUrl}/api/v1/complaints`,
      },
    };

    const config = configurations[backendType];
    if (config) {
      this.enableProductionMode('', config);
    } else {
      console.warn(
        `Unknown backend type: ${backendType}. Use enableProductionMode() instead.`
      );
    }
  }

  /**
   * Get current configuration status
   */
  getStatus() {
    return {
      isProduction: this.isProduction,
      isDevelopment: dashboardService.isDevelopment,
      apiBaseUrl: this.apiBaseUrl,
      endpoints: dashboardService.endpoints,
    };
  }
}

// Export singleton instance
export default new ProductionConfig();

/**
 * USAGE EXAMPLES:
 *
 * 1. When your backend is ready, call one of these in your main.jsx or App.jsx:
 *
 * import productionConfig from './config/productionConfig';
 *
 * // Option 1: Use pre-configured backend setup
 * productionConfig.setupForBackend('node-express', 'https://api.yourapp.com');
 *
 * // Option 2: Custom configuration
 * productionConfig.enableProductionMode('https://api.yourapp.com', {
 *   dashboard: 'https://api.yourapp.com/custom/dashboard',
 *   users: 'https://api.yourapp.com/custom/users'
 * });
 *
 * 2. Check current status:
 * console.log(productionConfig.getStatus());
 */
