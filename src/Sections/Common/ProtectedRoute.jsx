import React from "react";
import { Navigate } from "react-router-dom";

/**
 * ProtectedRoute
 * - Wrap routes that require authentication
 * - Agar user logged in nahi hai to /login pe redirect
 * 
 * Usage:
 * <Route
 *   path="/admin"
 *   element={
 *     <ProtectedRoute>
 *       <Dashboard />
 *     </ProtectedRoute>
 *   }
 * />
 */

export default function ProtectedRoute({ children }) {
  // TODO: Replace with real auth check (context or redux se)
  const isAuthenticated = localStorage.getItem("authToken"); // demo purpose

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
