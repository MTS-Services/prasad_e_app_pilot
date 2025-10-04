import ApiService from './apiService.js';

class ApiAuthService {
  static endpoints = {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
    verifyEmail: '/auth/verify-email',
    resendVerification: '/auth/resend-verification',
  };

  static async login(credentials) {
    const response = await ApiService.post(this.endpoints.login, credentials);

    if (response.token) {
      localStorage.setItem('authToken', response.token);
    }

    return response;
  }

  static async register(userData) {
    return ApiService.post(this.endpoints.register, userData);
  }

  static async logout() {
    try {
      const response = await ApiService.post(this.endpoints.logout);
      localStorage.removeItem('authToken');
      return response;
    } catch (error) {
      localStorage.removeItem('authToken');
      throw error;
    }
  }

  static async refreshToken() {
    const response = await ApiService.post(this.endpoints.refresh);

    if (response.token) {
      localStorage.setItem('authToken', response.token);
    }

    return response;
  }

  static async forgotPassword(email) {
    return ApiService.post(this.endpoints.forgotPassword, { email });
  }

  static async resetPassword(resetData) {
    return ApiService.post(this.endpoints.resetPassword, resetData);
  }

  static async verifyEmail(token) {
    return ApiService.post(this.endpoints.verifyEmail, { token });
  }

  static async resendVerification(email) {
    return ApiService.post(this.endpoints.resendVerification, { email });
  }

  static isAuthenticated() {
    return !!localStorage.getItem('authToken');
  }

  static getToken() {
    return localStorage.getItem('authToken');
  }
}

export default ApiAuthService;
