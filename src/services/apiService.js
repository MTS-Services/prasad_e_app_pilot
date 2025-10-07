// import axiosInstance from '../config/axiosConfig.js';

// class ApiService {
//   static async get(endpoint, params = {}) {
//     try {
//       const response = await axiosInstance.get(endpoint, { params });
//       return response.data;
//     } catch (error) {
//       throw this.handleError(error);
//     }
//   }

//   static async post(endpoint, data = {}) {
//     try {
//       const response = await axiosInstance.post(endpoint, data);
//       return response.data;
//     } catch (error) {
//       throw this.handleError(error);
//     }
//   }

//   static async put(endpoint, data = {}) {
//     try {
//       const response = await axiosInstance.put(endpoint, data);
//       return response.data;
//     } catch (error) {
//       throw this.handleError(error);
//     }
//   }

//   static async patch(endpoint, data = {}) {
//     try {
//       const response = await axiosInstance.patch(endpoint, data);
//       return response.data;
//     } catch (error) {
//       throw this.handleError(error);
//     }
//   }

//   static async delete(endpoint) {
//     try {
//       const response = await axiosInstance.delete(endpoint);
//       return response.data;
//     } catch (error) {
//       throw this.handleError(error);
//     }
//   }

//   static async uploadFile(endpoint, formData, onUploadProgress = null) {
//     try {
//       const response = await axiosInstance.post(endpoint, formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//         onUploadProgress: onUploadProgress
//           ? (progressEvent) => {
//               const percentCompleted = Math.round(
//                 (progressEvent.loaded * 100) / progressEvent.total
//               );
//               onUploadProgress(percentCompleted);
//             }
//           : undefined,
//       });
//       return response.data;
//     } catch (error) {
//       throw this.handleError(error);
//     }
//   }

//   static async downloadFile(endpoint, filename) {
//     try {
//       const response = await axiosInstance.get(endpoint, {
//         responseType: 'blob',
//       });

//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', filename);
//       document.body.appendChild(link);
//       link.click();
//       link.remove();
//       window.URL.revokeObjectURL(url);

//       return response.data;
//     } catch (error) {
//       throw this.handleError(error);
//     }
//   }

//   static handleError(error) {
//     const errorMessage = {
//       message: 'An unexpected error occurred',
//       status: null,
//       data: null,
//     };

//     if (error.response) {
//       errorMessage.message =
//         error.response.data?.message ||
//         error.response.statusText ||
//         'Server Error';
//       errorMessage.status = error.response.status;
//       errorMessage.data = error.response.data;
//     } else if (error.request) {
//       errorMessage.message = 'Network error. Please check your connection.';
//     } else {
//       errorMessage.message = error.message || 'Request failed';
//     }

//     return errorMessage;
//   }
// }

// export default ApiService;

import axiosInstance from "../config/axiosConfig.js";

// একটি প্রাইভেট হেল্পার ফাংশন যা শুধু এই মডিউলের ভেতরেই ব্যবহৃত হবে
const handleError = (error) => {
  const errorMessage = {
    message: "An unexpected error occurred",
    status: null,
    data: null,
  };

  if (error.response) {
    errorMessage.message =
      error.response.data?.message ||
      error.response.statusText ||
      "Server Error";
    errorMessage.status = error.response.status;
    errorMessage.data = error.response.data;
  } else if (error.request) {
    errorMessage.message = "Network error. Please check your connection.";
  } else {
    errorMessage.message = error.message || "Request failed";
  }

  return errorMessage;
};

// সরাসরি একটি অবজেক্ট তৈরি এবং এক্সপোর্ট করা
const ApiService = {
  async get(endpoint, params = {}) {
    try {
      const response = await axiosInstance.get(endpoint, { params });
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  async post(endpoint, data = {}) {
    try {
      const response = await axiosInstance.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  async put(endpoint, data = {}) {
    try {
      const response = await axiosInstance.put(endpoint, data);
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  async patch(endpoint, data = {}) {
    try {
      const response = await axiosInstance.patch(endpoint, data);
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  async delete(endpoint) {
    try {
      const response = await axiosInstance.delete(endpoint);
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  async uploadFile(endpoint, formData, onUploadProgress = null) {
    try {
      const response = await axiosInstance.post(endpoint, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: onUploadProgress
          ? (progressEvent) => {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              onUploadProgress(percentCompleted);
            }
          : undefined,
      });
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  async downloadFile(endpoint, filename) {
    try {
      const response = await axiosInstance.get(endpoint, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },
};

export default ApiService;                       
