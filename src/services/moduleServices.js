import ApiService from './apiService.js';

class JobService {
  static endpoints = {
    jobs: '/jobs',
    myJobs: '/jobs/my-jobs',
    assignments: '/jobs/assignments',
  };

  /**
   * Get all jobs with pagination and filters
   * @param {object} params - Query parameters (page, limit, status, type, etc.)
   * @returns {Promise} - Jobs data
   */
  static async getAllJobs(params = {}) {
    return ApiService.get(this.endpoints.jobs, params);
  }

  /**
   * Get job by ID
   * @param {string|number} jobId - Job ID
   * @returns {Promise} - Job data
   */
  static async getJobById(jobId) {
    return ApiService.get(`${this.endpoints.jobs}/${jobId}`);
  }

  /**
   * Create new job
   * @param {object} jobData - Job data
   * @returns {Promise} - Created job data
   */
  static async createJob(jobData) {
    return ApiService.post(this.endpoints.jobs, jobData);
  }

  /**
   * Update job
   * @param {string|number} jobId - Job ID
   * @param {object} jobData - Updated job data
   * @returns {Promise} - Updated job data
   */
  static async updateJob(jobId, jobData) {
    return ApiService.put(`${this.endpoints.jobs}/${jobId}`, jobData);
  }

  /**
   * Delete job
   * @param {string|number} jobId - Job ID
   * @returns {Promise} - Deletion confirmation
   */
  static async deleteJob(jobId) {
    return ApiService.delete(`${this.endpoints.jobs}/${jobId}`);
  }

  /**
   * Get jobs assigned to current user
   * @param {object} params - Query parameters
   * @returns {Promise} - User's jobs data
   */
  static async getMyJobs(params = {}) {
    return ApiService.get(this.endpoints.myJobs, params);
  }

  /**
   * Assign job to user
   * @param {string|number} jobId - Job ID
   * @param {string|number} userId - User ID
   * @returns {Promise} - Assignment response
   */
  static async assignJob(jobId, userId) {
    return ApiService.post(`${this.endpoints.jobs}/${jobId}/assign`, {
      userId,
    });
  }

  /**
   * Update job status
   * @param {string|number} jobId - Job ID
   * @param {string} status - New status
   * @returns {Promise} - Updated job data
   */
  static async updateJobStatus(jobId, status) {
    return ApiService.patch(`${this.endpoints.jobs}/${jobId}/status`, {
      status,
    });
  }
}

class ComplaintService {
  static endpoints = {
    complaints: '/complaints',
    myComplaints: '/complaints/my-complaints',
  };

  /**
   * Get all complaints
   * @param {object} params - Query parameters
   * @returns {Promise} - Complaints data
   */
  static async getAllComplaints(params = {}) {
    return ApiService.get(this.endpoints.complaints, params);
  }

  /**
   * Get complaint by ID
   * @param {string|number} complaintId - Complaint ID
   * @returns {Promise} - Complaint data
   */
  static async getComplaintById(complaintId) {
    return ApiService.get(`${this.endpoints.complaints}/${complaintId}`);
  }

  /**
   * Create new complaint
   * @param {object} complaintData - Complaint data
   * @returns {Promise} - Created complaint data
   */
  static async createComplaint(complaintData) {
    return ApiService.post(this.endpoints.complaints, complaintData);
  }

  /**
   * Update complaint
   * @param {string|number} complaintId - Complaint ID
   * @param {object} complaintData - Updated complaint data
   * @returns {Promise} - Updated complaint data
   */
  static async updateComplaint(complaintId, complaintData) {
    return ApiService.put(
      `${this.endpoints.complaints}/${complaintId}`,
      complaintData
    );
  }

  /**
   * Update complaint status
   * @param {string|number} complaintId - Complaint ID
   * @param {string} status - New status
   * @returns {Promise} - Updated complaint data
   */
  static async updateComplaintStatus(complaintId, status) {
    return ApiService.patch(
      `${this.endpoints.complaints}/${complaintId}/status`,
      { status }
    );
  }

  /**
   * Get current user's complaints
   * @param {object} params - Query parameters
   * @returns {Promise} - User's complaints data
   */
  static async getMyComplaints(params = {}) {
    return ApiService.get(this.endpoints.myComplaints, params);
  }
}

class ReportService {
  static endpoints = {
    reports: '/reports',
    analytics: '/reports/analytics',
  };

  /**
   * Get reports
   * @param {object} params - Query parameters
   * @returns {Promise} - Reports data
   */
  static async getReports(params = {}) {
    return ApiService.get(this.endpoints.reports, params);
  }

  /**
   * Generate report
   * @param {object} reportConfig - Report configuration
   * @returns {Promise} - Generated report data
   */
  static async generateReport(reportConfig) {
    return ApiService.post(this.endpoints.reports, reportConfig);
  }

  /**
   * Get analytics data
   * @param {object} params - Query parameters
   * @returns {Promise} - Analytics data
   */
  static async getAnalytics(params = {}) {
    return ApiService.get(this.endpoints.analytics, params);
  }

  /**
   * Download report
   * @param {string|number} reportId - Report ID
   * @param {string} format - Report format (pdf, xlsx, csv)
   * @returns {Promise} - Download response
   */
  static async downloadReport(reportId, format = 'pdf') {
    return ApiService.downloadFile(
      `${this.endpoints.reports}/${reportId}/download?format=${format}`,
      `report_${reportId}.${format}`
    );
  }
}

export { JobService, ComplaintService, ReportService };
