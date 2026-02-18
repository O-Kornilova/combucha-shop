// const API_BASE_URL = "http://localhost:5002/api/users";
import API_BASE_URL from "../utils/config";

export async function login(credentials) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Login failed: ${response.status} ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}

export async function register(userData) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Register failed: ${response.status} ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Register error:", error);
    throw error;
  }
}

export async function getProfile(token) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Fetch profile failed: ${response.status} ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Get profile error:", error);
    throw error;
  }
}
