import React, { useState } from "react";

export default function ManageBlogs() {
    // Dummy Blogs
    const [blogs, setBlogs] = useState([
        { id: 1, title: "5 Tips for Healthy Plants", author: "Admin", date: "2025-08-01" },
        { id: 2, title: "Top 10 Indoor Plants", author: "Raza", date: "2025-08-10" },
    ]);

    const [newBlog, setNewBlog] = useState({ title: "", author: "", date: "" });

    // Add Blog
    const handleAddBlog = (e) => {
        e.preventDefault();
        if (!newBlog.title || !newBlog.author || !newBlog.date) {
            alert("Please fill all fields");
            return;
        }
        const newEntry = {
            id: Date.now(),
            ...newBlog,
        };
        setBlogs([...blogs, newEntry]);
        setNewBlog({ title: "", author: "", date: "" });
    };

    // Delete Blog
    const handleDelete = (id) => {
        setBlogs(blogs.filter((b) => b.id !== id));
    };

    return (
        <section className="min-h-screen bg-gray-50 py-10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Manage Blogs</h1>

                {/* Add Blog Form */}
                <form
                    onSubmit={handleAddBlog}
                    className="bg-white p-6 rounded-2xl shadow-sm border mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
                >
                    <input
                        type="text"
                        placeholder="Blog Title"
                        value={newBlog.title}
                        onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                        className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Author"
                        value={newBlog.author}
                        onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })}
                        className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="date"
                        value={newBlog.date}
                        onChange={(e) => setNewBlog({ ...newBlog, date: e.target.value })}
                        className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="sm:col-span-3 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                    >
                        + Add Blog
                    </button>
                </form>

                {/* Blogs Table */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border">
                    <h2 className="text-xl font-semibold mb-4">Blog List</h2>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="p-3 border">ID</th>
                                <th className="p-3 border">Title</th>
                                <th className="p-3 border">Author</th>
                                <th className="p-3 border">Date</th>
                                <th className="p-3 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="text-center p-4 text-gray-500">
                                        No blogs available
                                    </td>
                                </tr>
                            ) : (
                                blogs.map((blog) => (
                                    <tr key={blog.id} className="hover:bg-gray-50">
                                        <td className="p-3 border">{blog.id}</td>
                                        <td className="p-3 border">{blog.title}</td>
                                        <td className="p-3 border">{blog.author}</td>
                                        <td className="p-3 border">{blog.date}</td>
                                        <td className="p-3 border">
                                            <button
                                                onClick={() => handleDelete(blog.id)}
                                                className="px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
