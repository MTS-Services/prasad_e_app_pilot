import ApiService from './apiService.js';

class UserService {
  static endpoints = {
    users: '/users',
    profile: '/users/profile',
    avatar: '/users/avatar',
  };

  static async getAllUsers(params = {}) {
    return ApiService.get(this.endpoints.users, params);
  }

  static async getUserById(userId) {
    return ApiService.get(`${this.endpoints.users}/${userId}`);
  }

  static async createUser(userData) {
    return ApiService.post(this.endpoints.users, userData);
  }

  static async updateUser(userId, userData) {
    return ApiService.put(`${this.endpoints.users}/${userId}`, userData);
  }

  static async patchUser(userId, userData) {
    return ApiService.patch(`${this.endpoints.users}/${userId}`, userData);
  }

  static async deleteUser(userId) {
    return ApiService.delete(`${this.endpoints.users}/${userId}`);
  }

  static async getProfile() {
    return ApiService.get(this.endpoints.profile);
  }

  static async updateProfile(profileData) {
    return ApiService.put(this.endpoints.profile, profileData);
  }

  static async uploadAvatar(avatarFile, onProgress) {
    const formData = new FormData();
    formData.append('avatar', avatarFile);

    return ApiService.uploadFile(this.endpoints.avatar, formData, onProgress);
  }

  static async searchUsers(query, filters = {}) {
    const params = { search: query, ...filters };
    return ApiService.get(`${this.endpoints.users}/search`, params);
  }

  static async getUsersByRole(role, params = {}) {
    return ApiService.get(`${this.endpoints.users}/role/${role}`, params);
  }
}

export default UserService;
