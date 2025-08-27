import React, { useState } from "react";
import { FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function ResetPassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("❌ Passwords do not match!");
            return;
        }

        try {
            setLoading(true);

            // ⚡ Yahan backend API call hoga (reset password ke liye)
            // Example:
            // const res = await fetch("http://localhost:5000/api/auth/reset-password", {
            //   method: "POST",
            //   headers: { "Content-Type": "application/json" },
            //   body: JSON.stringify({ password }),
            // });

            toast.success("✅ Password has been reset successfully!");
            setPassword("");
            setConfirmPassword("");
        } catch (err) {
            toast.error("❌ Failed to reset password.");
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

            {/* Reset Password Card */}
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg bg-white/90 p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-md">
                <h2 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent mb-4">
                    Reset Password
                </h2>

                <p className="text-sm sm:text-base text-gray-700 text-center mb-6">
                    Enter your new password below.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* New Password */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            New Password
                        </label>
                        <div className="relative">
                            <FiLock className="absolute top-3 left-3 text-gray-400 text-lg" />
                            <input
                                type="password"
                                placeholder="Enter new password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-sm sm:text-base"
                                required
                            />
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <FiLock className="absolute top-3 left-3 text-gray-400 text-lg" />
                            <input
                                type="password"
                                placeholder="Re-enter new password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-sm sm:text-base"
                                required
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="cursor-pointer w-full bg-gradient-to-r from-green-600 to-emerald-400 text-white py-2 rounded-lg hover:opacity-90 transition disabled:opacity-50 shadow-md font-medium text-sm sm:text-base"
                    >
                        {loading ? "Resetting..." : "Reset Password"}
                    </button>
                </form>

                {/* Back to Login */}
                <p className="text-center text-xs sm:text-sm text-gray-700 mt-6">
                    Remembered your password?{" "}
                    <Link
                        to="/login"
                        className="cursor-pointer text-green-600 font-semibold hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
