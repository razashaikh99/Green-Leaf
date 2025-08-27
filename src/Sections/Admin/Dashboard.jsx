import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  // Dummy stats (baad me API se fetch kar sakte ho)
  const stats = [
    { id: 1, label: "Total Plants", value: 25, color: "bg-green-100 text-green-700", link: "/admin/manage-plants" },
    { id: 2, label: "Total Blogs", value: 12, color: "bg-blue-100 text-blue-700", link: "/admin/manage-blogs" },
    { id: 3, label: "Total Users", value: 58, color: "bg-yellow-100 text-yellow-700", link: "#" },
    { id: 4, label: "Orders", value: 10, color: "bg-purple-100 text-purple-700", link: "#" },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className={`p-6 rounded-2xl shadow-sm border hover:shadow-md transition ${item.color}`}
            >
              <p className="text-sm">{item.label}</p>
              <h2 className="text-2xl font-bold">{item.value}</h2>
            </Link>
          ))}
        </div>

        {/* Quick Links */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/admin/manage-plants"
              className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
            >
              Manage Plants
            </Link>
            <Link
              to="/admin/manage-blogs"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Manage Blogs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
