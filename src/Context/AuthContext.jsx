import React, { createContext, useContext, useState, useEffect } from "react";

// Context create
const AuthContext = createContext();

// Custom hook for easy usage
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null = not logged in
  const [loading, setLoading] = useState(true);

  // Check if user already logged in (on refresh)
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = (email, password) => {
    // TODO: Replace with real API
    const fakeUser = { id: 1, name: "Raza", email };
    setUser(fakeUser);
    localStorage.setItem("authUser", JSON.stringify(fakeUser));
    localStorage.setItem("authToken", "demo-token"); // ProtectedRoute check
  };

  // Signup function (demo same as login)
  const signup = (name, email, password) => {
    const fakeUser = { id: 2, name, email };
    setUser(fakeUser);
    localStorage.setItem("authUser", JSON.stringify(fakeUser));
    localStorage.setItem("authToken", "demo-token");
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
    localStorage.removeItem("authToken");
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
