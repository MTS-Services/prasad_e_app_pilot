/**
 * Dashboard Configuration
 * Centralized configuration for easy management
 */

export const dashboardConfig = {
  // API Configuration
  api: {
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
    timeout: 10000,
    retryAttempts: 3,
  },

  // Environment Configuration
  environment: {
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
    useMockData:
      import.meta.env.VITE_USE_MOCK_DATA === 'true' || import.meta.env.DEV,
  },

  // UI Configuration
  ui: {
    defaultLanguage: 'en',
    supportedLanguages: ['en', 'in'],
    theme: {
      primary: '#10B981', // Emerald-500
      secondary: '#6B7280', // Gray-500
      success: '#059669', // Emerald-600
      warning: '#D97706', // Amber-600
      error: '#DC2626', // Red-600
    },
    sidebar: {
      width: '16rem', // w-64
      mobileBreakpoint: '1024px', // lg
    },
  },

  // Chart Configuration
  charts: {
    revenue: {
      colors: {
        primary: '#10B981',
        secondary: '#9CA3AF',
      },
      animation: {
        duration: 750,
        easing: 'easeInOutQuart',
      },
    },
  },

  // Pagination Configuration
  pagination: {
    defaultPageSize: 10,
    pageSizeOptions: [5, 10, 20, 50],
  },

  // Feature Flags
  features: {
    enableCharts: true,
    enableExport: true,
    enableRealTimeUpdates: false, // Enable when WebSocket is ready
    enableNotifications: true,
  },

  // Routes Configuration
  routes: {
    dashboard: '/',
    login: '/login',
    notFound: '/404',
    unauthorized: '/unauthorized',
  },
};

export default dashboardConfig;
