import React from "react";

export default function PlantCard({ plant, onAddToCart, onAddToGarden }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden border">
            {/* Image */}
            <div className="h-44 w-full overflow-hidden">
                <img
                    src={plant.image}
                    alt={plant.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                />
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
                {/* Title + Care Level */}
                <div className="flex items-start justify-between gap-2">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">{plant.name}</h3>
                        <p className="text-xs text-gray-500 italic">{plant.botanical_name}</p>
                    </div>
                    <span className="text-sm px-2 py-1 rounded-full bg-green-100 text-green-700 whitespace-nowrap">
                        {plant.care_level}
                    </span>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                    <span className="px-2 py-1 rounded-full bg-gray-100">{plant.category}</span>
                    <span className="px-2 py-1 rounded-full bg-gray-100">{plant.light_requirement}</span>
                    <span className="px-2 py-1 rounded-full bg-gray-100">{plant.watering_schedule}</span>
                </div>

                {/* Price + Actions */}
                <div className="flex items-center justify-between pt-2">
                    <p className="text-base font-semibold text-gray-900">Rs. {plant.price}</p>
                    <div className="flex gap-2">
                        <button
                            onClick={() => onAddToGarden?.(plant)}
                            className="text-sm px-3 py-1.5 rounded-lg border hover:bg-gray-50"
                        >
                            + My Garden
                        </button>
                        <button
                            onClick={() => onAddToCart?.(plant)}
                            className="text-sm px-3 py-1.5 rounded-lg bg-green-600 text-white hover:bg-green-700"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
