import React from "react";
import BlogCard from "./BlogCard"; // 👈 card component import

// Dummy blog data (API / DB se baad me laana hai)
const BLOGS = [
  {
    id: 1,
    title: "10 Indoor Plants That Purify Air",
    description:
      "Discover the best indoor plants that not only beautify your home but also improve air quality.",
    image:
      "https://images.unsplash.com/photo-1587502536402-08f7c0d1d702?q=80&w=800&auto=format&fit=crop",
    author: "Raza Sheikh",
    date: "Aug 15, 2025",
  },
  {
    id: 2,
    title: "How to Care for Your Garden in Summer",
    description:
      "Summer can be harsh for plants. Learn essential tips to keep your garden healthy and thriving.",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop",
    author: "Admin",
    date: "Jul 30, 2025",
  },
  {
    id: 3,
    title: "The Benefits of Having a Home Garden",
    description:
      "Gardening is more than a hobby—it improves mental health, reduces stress, and provides fresh food.",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=800&auto=format&fit=crop",
    author: "Team TechWiz",
    date: "Jul 20, 2025",
  },
];

export default function BlogList() {
  return (
    <section className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            🌱 Gardening Blogs
          </h1>
          <p className="text-gray-600 mt-2">
            Explore tips, guides, and stories to make your gardening journey easier and fun.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {BLOGS.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
