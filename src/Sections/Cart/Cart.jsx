import React, { useState } from "react";
import CartItem from "./CartItem"; // 👈 child component

// Dummy cart data (baad me context/API connect karna hai)
const INITIAL_CART = [
  {
    id: 1,
    name: "Snake Plant",
    price: 1800,
    qty: 1,
    image:
      "https://images.unsplash.com/photo-1587306552252-c8e9d1f69f6a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Rose",
    price: 1500,
    qty: 2,
    image:
      "https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Cart() {
  const [cart, setCart] = useState(INITIAL_CART);

  const updateQty = (id, qty) => {
    if (qty < 1) return;
    setCart(
      cart.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          🛒 Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="bg-white border rounded-2xl p-10 text-center text-gray-600">
            Your cart is empty. Add some plants to checkout.
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left Side: Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  updateQty={updateQty}
                  removeItem={removeItem}
                />
              ))}
            </div>

            {/* Right Side: Summary */}
            <div className="bg-white border rounded-2xl p-6 shadow-sm h-fit">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Total Items</span>
                <span>{cart.length}</span>
              </div>
              <div className="flex justify-between mb-4 font-semibold text-gray-900">
                <span>Total Price</span>
                <span>Rs. {total}</span>
              </div>
              <button className="w-full px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
