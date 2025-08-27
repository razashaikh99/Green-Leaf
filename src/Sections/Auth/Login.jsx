import React, { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Something went wrong");

            localStorage.setItem("token", data.token);
            toast.success("✅ Logged in successfully!");
            setEmail("");
            setPassword("");
        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center relative px-4"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80')",
            }}
        >
            {/* Overlay Blur */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur"></div>

            {/* Login Card */}
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg bg-white/90 p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-md">
                <h2 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent mb-6">
                    Login to Greenleaf
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <FiMail className="absolute top-3 left-3 text-gray-400 text-lg" />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-sm sm:text-base"
                                required
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <FiLock className="absolute top-3 left-3 text-gray-400 text-lg" />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-sm sm:text-base"
                                required
                            />
                        </div>
                    </div>

                    {/* Forget Password link */}
                    <div className="text-left">
                        <Link
                            to="/forget-password"
                            className="text-sm text-green-600 font-medium hover:underline"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="cursor-pointer w-full bg-gradient-to-r from-green-600 to-emerald-400 text-white py-2 rounded-lg hover:opacity-90 transition disabled:opacity-50 shadow-md font-medium text-sm sm:text-base"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                {/* Extra links */}
                <p className="text-center text-xs sm:text-sm text-gray-700 mt-6">
                    Don’t have an account?{" "}
                    <Link
                        to="/signup"
                        className="cursor-pointer text-green-600 font-semibold hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
