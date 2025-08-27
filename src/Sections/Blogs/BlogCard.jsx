import React from "react";
import { useNavigate } from "react-router-dom";

export default function BlogCard({ blog }) {
  const navigate = useNavigate();

  const handleReadMore = () => {
    // Blog detail page per navigate karega (id ke sath)
    navigate(`/blogs/${blog.id}`);
  };

  return (
    <div className="bg-white border rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-full w-full object-cover hover:scale-105 transition"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{blog.description}</p>

        {/* Author + Date */}
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>✍ {blog.author}</span>
          <span>{blog.date}</span>
        </div>

        {/* Read More Button */}
        <button
          onClick={handleReadMore}
          className="mt-3 inline-block px-4 py-2 text-sm rounded-lg bg-green-600 text-white hover:bg-green-700"
        >
          Read More
        </button>
      </div>
    </div>
  );
}
