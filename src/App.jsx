import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

// Context Providers
import { AuthProvider } from "./Context/AuthContext";
import { CartProvider } from "./Context/CartContext";
import { GardenProvider } from "./Context/GardenContext";

// Common
import Navbar from "./Sections/Common/Navbar";
import Footer from "./Sections/Common/Footer";
import ProtectedRoute from "./Sections/Common/ProtectedRoute";

// Cart
import Cart from "./Sections/Cart/Cart";

// Blogs
import BlogList from "./Sections/Blogs/BlogList";
import BlogDetail from "./Sections/Blogs/BlogDetail";

// Admin
import Dashboard from "./Sections/Admin/Dashboard";
import ManagePlants from "./Sections/Admin/ManagePlants";
import ManageBlogs from "./Sections/Admin/ManageBlogs";

// Auth 
import Login from "./Sections/Auth/Login";
import Signup from "./Sections/Auth/Signup";
import ResetPassword from "./Sections/Auth/ResetPassword";

// Plant Catalog
import PlantList from "./Sections/PlantCatalog/PlantList";

// MyGarden
import MyGarden from "./Sections/MyGarden/MyGarden";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <GardenProvider>
          <Router>
            <div className="flex flex-col min-h-screen">
              <Navbar />

              <main className="flex-grow">
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<PlantList />} />
                  <Route path="/my-garden" element={<MyGarden />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/blogs" element={<BlogList />} />
                  <Route path="/blogs/:id" element={<BlogDetail />} />

                  {/* Auth Routes */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/reset-password" element={<ResetPassword />} />

                  {/* Admin Routes (Protected) */}
                  <Route
                    path="/admin"
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/admin/plants"
                    element={
                      <ProtectedRoute>
                        <ManagePlants />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/admin/blogs"
                    element={
                      <ProtectedRoute>
                        <ManageBlogs />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </main>

              <Footer />
            </div>
          </Router>
        </GardenProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
