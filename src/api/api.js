// Complete AiRIS API Client
// Base URL for the backend
const API_BASE_URL = 'https://deadly-one-seasnail.ngrok-free.app';

// Helper function to make API requests
const makeRequest = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

// Helper function for file uploads
const makeFileRequest = async (url, formData, options = {}) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'ngrok-skip-browser-warning': 'true',
        ...options.headers,
      },
      body: formData,
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('File Upload Error:', error);
    throw error;
  }
};

// Token management functions
const TokenManager = {
  getToken: () => localStorage.getItem('authToken'),
  setToken: (token) => localStorage.setItem('authToken', token),
  removeToken: () => localStorage.removeItem('authToken'),
  hasToken: () => !!localStorage.getItem('authToken'),
};

// Authentication API
const AuthAPI = {
  // Create a new user
  register: async (userData) => {
    try {
      const response = await makeRequest(`${API_BASE_URL}/users/`, {
        method: 'POST',
        body: JSON.stringify(userData),
      });

      return {
        success: true,
        data: response,
        message: 'User created successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to create user'
      };
    }
  },

  // Sign in user
  login: async (credentials) => {
    try {
      const response = await makeRequest(`${API_BASE_URL}/users/login`, {
        method: 'POST',
        body: JSON.stringify(credentials),
      });

      if (response.token) {
        TokenManager.setToken(response.token);
      }

      return {
        success: true,
        data: response,
        message: 'User signed in successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to sign in user'
      };
    }
  },

  // Check if user is logged in
  isLoggedIn: () => {
    const token = TokenManager.getToken();
    
    if (!token) {
      return {
        isLoggedIn: false,
        message: 'No authentication token found'
      };
    }

    try {
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      const currentTime = Date.now() / 1000;
      
      if (tokenPayload.exp && tokenPayload.exp < currentTime) {
        TokenManager.removeToken();
        return {
          isLoggedIn: false,
          message: 'Token has expired'
        };
      }
    } catch (e) {
      console.log('Token is not JWT format, assuming valid');
    }

    return {
      isLoggedIn: true,
      message: 'User is logged in',
      token: token
    };
  },

  // Sign out user
  logout: () => {
    TokenManager.removeToken();
    return {
      success: true,
      message: 'User signed out successfully'
    };
  }
};

// Helper function for authenticated requests
const makeAuthenticatedRequest = async (endpoint, options = {}) => {
  const token = TokenManager.getToken();
  
  if (!token) {
    throw new Error('No authentication token found');
  }

  return await makeRequest(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Authorization': `Bearer ${token}`,
      ...options.headers,
    },
  });
};

// Helper function for authenticated file uploads
const makeAuthenticatedFileRequest = async (endpoint, formData, options = {}) => {
  const token = TokenManager.getToken();
  
  if (!token) {
    throw new Error('No authentication token found');
  }

  return await makeFileRequest(`${API_BASE_URL}${endpoint}`, formData, {
    ...options,
    headers: {
      'Authorization': `Bearer ${token}`,
      ...options.headers,
    },
  });
};

// Root API
const RootAPI = {
  // Read root endpoint
  readRoot: async () => {
    try {
      const response = await makeRequest(`${API_BASE_URL}/`);
      return {
        success: true,
        data: response,
        message: 'Root endpoint accessed successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to access root endpoint'
      };
    }
  }
};

// Projects API
const ProjectsAPI = {
  // Create a new project
  create: async (projectData) => {
    try {
      const response = await makeAuthenticatedRequest('/projects/', {
        method: 'POST',
        body: JSON.stringify(projectData),
      });

      return {
        success: true,
        data: response,
        message: 'Project created successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to create project'
      };
    }
  },

  // Get all projects
  getAll: async () => {
    try {
      const response = await makeAuthenticatedRequest('/projects/');
      return {
        success: true,
        data: response,
        message: 'Projects retrieved successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve projects'
      };
    }
  },

  // Get a project by ID
  getById: async (projectId) => {
    try {
      const response = await makeAuthenticatedRequest(`/projects/${projectId}`);
      return {
        success: true,
        data: response,
        message: 'Project retrieved successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve project'
      };
    }
  },

  // Update an existing project
  update: async (projectId, projectData) => {
    try {
      const response = await makeAuthenticatedRequest(`/projects/${projectId}`, {
        method: 'PUT',
        body: JSON.stringify(projectData),
      });

      return {
        success: true,
        data: response,
        message: 'Project updated successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to update project'
      };
    }
  },

  // Delete a project
  delete: async (projectId) => {
    try {
      const response = await makeAuthenticatedRequest(`/projects/${projectId}`, {
        method: 'DELETE',
      });

      return {
        success: true,
        data: response,
        message: 'Project deleted successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to delete project'
      };
    }
  }
};

// Documents API
const DocumentsAPI = {
  // Upload a document for a project
  upload: async (projectId, file, metadata = {}) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      // Add metadata if provided
      Object.keys(metadata).forEach(key => {
        formData.append(key, metadata[key]);
      });

      const response = await makeAuthenticatedFileRequest(`/projects/${projectId}/documents`, formData);

      return {
        success: true,
        data: response,
        message: 'Document uploaded successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to upload document'
      };
    }
  },

  // Get all documents for a project
  getByProject: async (projectId) => {
    try {
      const response = await makeAuthenticatedRequest(`/projects/${projectId}/documents/`);
      return {
        success: true,
        data: response,
        message: 'Documents retrieved successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve documents'
      };
    }
  },

  // Analyze a document (Proof of Execution using AiRIS)
  analyze: async (documentId, analysisOptions = {}) => {
    try {
      const response = await makeAuthenticatedRequest(`/documents/${documentId}/analyze/`, {
        method: 'POST',
        body: JSON.stringify(analysisOptions),
      });

      return {
        success: true,
        data: response,
        message: 'Document analysis started successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to start document analysis'
      };
    }
  }
};

// Analysis Results API
const AnalysisAPI = {
  // Get a specific analysis result
  getById: async (analysisId) => {
    try {
      const response = await makeAuthenticatedRequest(`/analysis-results/${analysisId}`);
      return {
        success: true,
        data: response,
        message: 'Analysis result retrieved successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve analysis result'
      };
    }
  },

  // Get all analysis results for a project
  getByProject: async (projectId) => {
    try {
      const response = await makeAuthenticatedRequest(`/projects/${projectId}/analysis-results`);
      return {
        success: true,
        data: response,
        message: 'Analysis results retrieved successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve analysis results'
      };
    }
  }
};

// AiRIS Opinion API
const AiRISAPI = {
  // Get AiRIS opinion
  getOpinion: async (opinionData) => {
    try {
      const response = await makeAuthenticatedRequest('/airis-opinion', {
        method: 'POST',
        body: JSON.stringify(opinionData),
      });

      return {
        success: true,
        data: response,
        message: 'AiRIS opinion retrieved successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to get AiRIS opinion'
      };
    }
  }
};

// Complete API object
const AiRISAPIClient = {
  // Authentication
  auth: AuthAPI,
  
  // Root endpoint
  root: RootAPI,
  
  // Projects management
  projects: ProjectsAPI,
  
  // Documents management
  documents: DocumentsAPI,
  
  // Analysis results
  analysis: AnalysisAPI,
  
  // AiRIS opinions
  airis: AiRISAPI,
  
  // Token management
  token: TokenManager,
  
  // Utility functions
  utils: {
    makeRequest,
    makeFileRequest,
    makeAuthenticatedRequest,
    makeAuthenticatedFileRequest
  }
};

// Export the complete API client
export default AiRISAPIClient;

// Example usage:
/*
// Authentication
const loginResult = await AiRISAPIClient.auth.login({
  email: 'user@example.com',
  password: 'password123'
});

// Check if logged in
const loginStatus = AiRISAPIClient.auth.isLoggedIn();

// Create a project
const projectResult = await AiRISAPIClient.projects.create({
  name: 'New Government Project',
  description: 'Description of the project',
  category: 'transparency'
});

// Get all projects
const allProjects = await AiRISAPIClient.projects.getAll();

// Get specific project
const project = await AiRISAPIClient.projects.getById(123);

// Update project
const updatedProject = await AiRISAPIClient.projects.update(123, {
  name: 'Updated Project Name'
});

// Delete project
const deleteResult = await AiRISAPIClient.projects.delete(123);

// Upload document
const file = document.getElementById('fileInput').files[0];
const uploadResult = await AiRISAPIClient.documents.upload(123, file, {
  title: 'Document Title',
  description: 'Document description'
});

// Get documents for project
const projectDocs = await AiRISAPIClient.documents.getByProject(123);

// Analyze document
const analysisResult = await AiRISAPIClient.documents.analyze(456, {
  analysisType: 'transparency',
  options: { includeMetadata: true }
});

// Get analysis result
const analysis = await AiRISAPIClient.analysis.getById(789);

// Get all analysis results for project
const projectAnalysis = await AiRISAPIClient.analysis.getByProject(123);

// Get AiRIS opinion
const opinion = await AiRISAPIClient.airis.getOpinion({
  query: 'What is the transparency level of this project?',
  context: 'government transparency'
});

// Access root endpoint
const rootInfo = await AiRISAPIClient.root.readRoot();
*/