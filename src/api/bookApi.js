import axios from 'axios';

// Base URL of your NestJS backend
const API_URL = "http://localhost:3001/books"; // Change this if your backend is running on a different port

// Get JWT Token from localStorage
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

};

// Add a new book
export const addBook = async (bookData) => {
  try {
    const response = await axios.post(`${API_URL}/books/addbooks`, bookData, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("❌ Error adding book:", error.response?.data || error);
    throw error;
  }
};

// Fetch all books
export const fetchBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/books/findAll`, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching books:", error.response?.data || error);
    throw error;
  }
};

// Get book by ID
export const fetchBookById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/books/${id}`, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching book:", error.response?.data || error);
    throw error;
  }
};

// Update book by ID
export const updateBook = async (id, bookData) => {
  try {
    const response = await axios.put(`${API_URL}/books/${id}`, bookData, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("❌ Error updating book:", error.response?.data || error);
    throw error;
  }
};

// Delete book by ID
export const deleteBook = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/books/${id}`, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("❌ Error deleting book:", error.response?.data || error);
    throw error;
  }
};
