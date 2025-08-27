import React, { useState } from "react";

// Dummy starting data (user added plants)
const INITIAL_MY_GARDEN = [
  {
    id: 1,
    name: "Snake Plant",
    image:
      "https://images.unsplash.com/photo-1587306552252-c8e9d1f69f6a?q=80&w=800&auto=format&fit=crop",
    reminder: "Water every 2 weeks",
  },
  {
    id: 2,
    name: "Rose",
    image:
      "https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=800&auto=format&fit=crop",
    reminder: "Fertilize weekly",
  },
];

export default function MyGarden() {
  const [garden, setGarden] = useState(INITIAL_MY_GARDEN);

  const removePlant = (id) => {
    setGarden(garden.filter((plant) => plant.id !== id));
  };

  const updateReminder = (id, newReminder) => {
    setGarden(
      garden.map((plant) =>
        plant.id === id ? { ...plant, reminder: newReminder } : plant
      )
    );
  };

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          🌿 My Garden
        </h1>

        {garden.length === 0 ? (
          <div className="bg-white border rounded-2xl p-10 text-center text-gray-600">
            Your garden is empty. Add plants from the catalog.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {garden.map((plant) => (
              <div
                key={plant.id}
                className="bg-white rounded-2xl shadow-sm border overflow-hidden"
              >
                {/* Plant Image */}
                <div className="h-40 w-full overflow-hidden">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Plant Info */}
                <div className="p-4 space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {plant.name}
                  </h3>

                  {/* Reminder */}
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Reminder: </span>
                    {plant.reminder}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        updateReminder(plant.id, "Water tomorrow 🌱")
                      }
                      className="px-3 py-1.5 text-sm rounded-lg border hover:bg-gray-50"
                    >
                      Set Reminder
                    </button>
                    <button
                      onClick={() => removePlant(plant.id)}
                      className="px-3 py-1.5 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
