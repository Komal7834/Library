import axios from "axios";

const API_URL = "http://localhost:3001/users"; // Backend URL
  
// 1. Signup User (Only ADMIN can access)
export const signUpUser = async (userData, token) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Signup Error:", error.response?.data || error.message);
    throw error;
  }
};

// 2. Login User
export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, loginData);
    return response.data; // { accessToken: "JWT_TOKEN" }
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    throw error;
  }
};

// 3. Get User Profile (Protected Route)
export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Profile Fetch Error:", error.response?.data || error.message);
    throw error;
  }
};

// 4. Get All Users (Public Route)
export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data; // { message: "this is your data", data: [...] }
  } catch (error) {
    console.error("Fetch Users Error:", error.response?.data || error.message);
    throw error;
  }
};

// 5.
export const addLibrarian = async (formData) => {
  try {
    const response = await axios.post("http://localhost:3001/users/signup", formData, {
      headers: { "Content-Type": "application/json" },  // Ensure JSON format
    });
    return response.data;
  } catch (error) {
    console.error("❌ Error adding librarian:", error.response?.data);
    throw error;
  }
};