import React, { useState } from "react";
import { FiKey } from "react-icons/fi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function VerifyCode() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // ⚡ Yahan tum backend API call karoge (verify code ke liye)
      // Example:
      // const res = await fetch("http://localhost:5000/api/auth/verify-code", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ code }),
      // });

      toast.success("✅ Code verified successfully!");
      setCode("");
    } catch (err) {
      toast.error("❌ Invalid or expired code.");
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

      {/* Verify Code Card */}
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg bg-white/90 p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent mb-4">
          Verify Code
        </h2>

        <p className="text-sm sm:text-base text-gray-700 text-center mb-6">
          Enter the 6-digit code sent to your email to verify your identity.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Code Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Verification Code
            </label>
            <div className="relative">
              <FiKey className="absolute top-3 left-3 text-gray-400 text-lg" />
              <input
                type="text"
                placeholder="Enter 6-digit code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                maxLength={6}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-sm sm:text-base tracking-widest"
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
            {loading ? "Verifying..." : "Verify Code"}
          </button>
        </form>

        {/* Back to Login */}
        <p className="text-center text-xs sm:text-sm text-gray-700 mt-6">
          Didn’t receive the code?{" "}
          <Link
            to="/forget-password"
            className="cursor-pointer text-green-600 font-semibold hover:underline"
          >
            Resend
          </Link>
        </p>
      </div>
    </div>
  );
}
