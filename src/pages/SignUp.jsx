import React, { useState } from "react";

// AiRIS API Client (embedded for this component)
const API_BASE_URL = 'https://deadly-one-seasnail.ngrok-free.app';

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

const AuthAPI = {
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

  login: async (credentials) => {
    try {
      const response = await makeRequest(`${API_BASE_URL}/users/login`, {
        method: 'POST',
        body: JSON.stringify(credentials),
      });

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
  }
};

export default function SignUp() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [userType, setUserType] = useState("admin");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Form states
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phoneNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const clearForm = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      phoneNumber: ''
    });
  };

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 5000);
  };

  const validateForm = () => {
    if (!isSignIn) {
      // Registration validation
      if (userType === 'admin') {
        if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
          showMessage('error', 'Please fill in all required fields');
          return false;
        }
      } else {
        if (!formData.fullName || !formData.email || !formData.phoneNumber || !formData.password || !formData.confirmPassword) {
          showMessage('error', 'Please fill in all required fields');
          return false;
        }
      }

      if (formData.password !== formData.confirmPassword) {
        showMessage('error', 'Passwords do not match');
        return false;
      }

      if (formData.password.length < 6) {
        showMessage('error', 'Password must be at least 6 characters long');
        return false;
      }
    } else {
      // Sign in validation
      if (userType === 'admin') {
        if (!formData.username && !formData.email) {
          showMessage('error', 'Please enter username or email');
          return false;
        }
      } else {
        if (!formData.email) {
          showMessage('error', 'Please enter your email');
          return false;
        }
      }

      if (!formData.password) {
        showMessage('error', 'Please enter your password');
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      if (isSignIn) {
        // Sign In
        const credentials = userType === 'admin' 
          ? { 
              username: formData.username || formData.email, 
              password: formData.password 
            }
          : { 
              email: formData.email, 
              password: formData.password 
            };

        const result = await AuthAPI.login(credentials);
        
        if (result.success) {
          showMessage('success', 'Signed in successfully!');
          clearForm();
          // Here you would typically redirect to dashboard
          console.log('Login successful:', result.data);
        } else {
          showMessage('error', result.message || 'Sign in failed');
        }
      } else {
        // Sign Up
        const userData = userType === 'admin' 
          ? {
              username: formData.username,
              email: formData.email,
              password: formData.password,
              role: 'admin'
            }
          : {
              full_name: formData.fullName,
              email: formData.email,
              phone_number: formData.phoneNumber,
              password: formData.password,
              role: 'citizen'
            };

        const result = await AuthAPI.register(userData);
        
        if (result.success) {
          showMessage('success', 'Account created successfully!');
          clearForm();
          // Optionally switch to sign in mode
          setTimeout(() => setIsSignIn(true), 2000);
        } else {
          showMessage('error', result.message || 'Registration failed');
        }
      }
    } catch (error) {
      showMessage('error', 'An unexpected error occurred');
      console.error('Auth error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
        {/* Message Display */}
        {message.text && (
          <div className={`mb-4 p-3 rounded-lg text-center ${
            message.type === 'success' 
              ? 'bg-green-100 text-green-700 border border-green-300' 
              : 'bg-red-100 text-red-700 border border-red-300'
          }`}>
            {message.text}
          </div>
        )}

        {/* Navigation for user type */}
        <div className="flex justify-center gap-4 pb-4">
          <button
            type="button"
            className={`px-4 py-2 rounded-lg font-bold ${
              userType === "admin"
                ? "bg-[#19a1e5] text-white"
                : "bg-[#f0f3f4] text-[#111518]"
            }`}
            onClick={() => {
              setUserType("admin");
              clearForm();
            }}
          >
            Administrator
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-lg font-bold ${
              userType === "citizen"
                ? "bg-[#19a1e5] text-white"
                : "bg-[#f0f3f4] text-[#111518]"
            }`}
            onClick={() => {
              setUserType("citizen");
              clearForm();
            }}
          >
            Citizen
          </button>
        </div>

        <h2 className="text-[#111518] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
          {userType === "admin"
            ? isSignIn
              ? "Administrator Sign In"
              : "Administrator Registration"
            : isSignIn
            ? "Citizen Sign In"
            : "Citizen Registration"}
        </h2>

        <div>
          {/* Form for selected user type */}
          {userType === "admin" ? (
            isSignIn ? (
              <>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                  <label className="flex flex-col min-w-40 flex-1">
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="Username or Email"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                    />
                  </label>
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                  <label className="flex flex-col min-w-40 flex-1">
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Password"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                    />
                  </label>
                </div>
              </>
            ) : (
              <>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                  <label className="flex flex-col min-w-40 flex-1">
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="Username"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                    />
                  </label>
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                  <label className="flex flex-col min-w-40 flex-1">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                    />
                  </label>
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                  <label className="flex flex-col min-w-40 flex-1">
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Password"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                    />
                  </label>
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                  <label className="flex flex-col min-w-40 flex-1">
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm Password"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                    />
                  </label>
                </div>
              </>
            )
          ) : isSignIn ? (
            <>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>
            </>
          ) : (
            <>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm Password"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>
            </>
          )}

          <div className="flex px-4 py-3">
            <button 
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
              className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#19a1e5] text-white text-sm font-bold leading-normal tracking-[0.015em] ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <span className="truncate">
                {isLoading ? 'Please wait...' : (isSignIn ? 'Sign In' : 'Sign Up')}
              </span>
            </button>
          </div>
        </div>

        <div className="flex px-4 py-3 justify-center">
          <button
            type="button"
            className="text-[#19a1e5] text-sm font-bold underline"
            onClick={() => {
              setIsSignIn(!isSignIn);
              clearForm();
            }}
          >
            {isSignIn ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
          </button>
        </div>

        <p className="text-[#637c88] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
          Security Tips: Use a strong, unique password with a mix of characters.
        </p>
      </div>
    </div>
  );
}