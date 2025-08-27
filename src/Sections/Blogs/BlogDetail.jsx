import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Dummy blogs (same as BlogList me used)
const BLOGS = [
  {
    id: 1,
    title: "10 Indoor Plants That Purify Air",
    description:
      "Discover the best indoor plants that not only beautify your home but also improve air quality.",
    content: `
      Indoor plants are not just decorative; they are natural air purifiers.
      Snake plants, peace lilies, and aloe vera are excellent choices for homes.
      They require minimal care but provide maximum benefits.
      Place them in your bedroom or living room for fresh and clean air.`,
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
    content: `
      During summer, plants need extra water and shade. Always water in the early
      morning or late evening to prevent evaporation. Use mulch to retain soil
      moisture and protect roots from excessive heat. Regular pruning helps plants
      grow healthier in tough conditions.`,
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
    content: `
      A home garden is a blessing. It provides fresh vegetables and fruits,
      reduces grocery costs, and promotes a healthy lifestyle. Gardening is also
      therapeutic; spending time with plants reduces stress and anxiety.`,
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=800&auto=format&fit=crop",
    author: "Team TechWiz",
    date: "Jul 20, 2025",
  },
];

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = BLOGS.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Blog not found.
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-2xl shadow-sm p-6">
        {/* Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-72 object-cover rounded-xl mb-6"
        />

        {/* Title & Meta */}
        <h1 className="text-3xl font-bold text-gray-900">{blog.title}</h1>
        <div className="flex justify-between items-center text-sm text-gray-500 mt-2 mb-6">
          <span>✍ {blog.author}</span>
          <span>{blog.date}</span>
        </div>

        {/* Content */}
        <article className="prose prose-green max-w-none text-gray-700">
          {blog.content.split("\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </article>

        {/* Back Button */}
        <div className="mt-8">
          <button
            onClick={() => navigate("/blogs")}
            className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
          >
            ← Back to Blogs
          </button>
        </div>
      </div>
    </section>
  );
}
