import React from "react";

export default function CartItem({ item, updateQty, removeItem }) {
    return (
        <div className="flex items-center bg-white border rounded-2xl p-4 shadow-sm">
            {/* Image */}
            <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-lg object-cover border"
            />

            {/* Details */}
            <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">Rs. {item.price}</p>

                {/* Quantity Controls */}
                <div className="flex items-center mt-2">
                    <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="px-2 py-1 border rounded-l-lg hover:bg-gray-100"
                    >
                        -
                    </button>
                    <span className="px-4 py-1 border-t border-b">{item.qty}</span>
                    <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="px-2 py-1 border rounded-r-lg hover:bg-gray-100"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Price & Remove */}
            <div className="flex flex-col items-end gap-2">
                <p className="text-base font-semibold text-gray-900">
                    Rs. {item.price * item.qty}
                </p>
                <button
                    onClick={() => removeItem(item.id)}
                    className="text-sm text-red-600 hover:text-red-800"
                >
                    Remove
                </button>
            </div>
        </div>
    );
}
