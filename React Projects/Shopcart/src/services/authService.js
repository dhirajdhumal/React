import axiosInstance from "../api/axiosInstance";

// Register User
export const registerUser = async (userData) => {
  const response = await axiosInstance.post(
    "/auth/register",
    userData
  );

  return response.data;
};

// Login User
export const loginUser = async (credentials) => {
  const response = await axiosInstance.post(
    "/auth/login",
    credentials
  );

  return response.data;
};