import React, { useState } from "react";

export default function ManagePlants() {
  // Dummy data (replace with API/DB later)
  const [plants, setPlants] = useState([
    { id: 1, name: "Snake Plant", category: "Indoor", price: 1800 },
    { id: 2, name: "Rose", category: "Outdoor", price: 1500 },
    { id: 3, name: "Aloe Vera", category: "Air-Purifying", price: 900 },
  ]);

  const [newPlant, setNewPlant] = useState({ name: "", category: "", price: "" });

  // Add Plant
  const handleAddPlant = (e) => {
    e.preventDefault();
    if (!newPlant.name || !newPlant.category || !newPlant.price) {
      alert("Please fill all fields");
      return;
    }
    const newEntry = {
      id: Date.now(),
      ...newPlant,
      price: Number(newPlant.price),
    };
    setPlants([...plants, newEntry]);
    setNewPlant({ name: "", category: "", price: "" });
  };

  // Delete Plant
  const handleDelete = (id) => {
    setPlants(plants.filter((p) => p.id !== id));
  };

  return (
    <section className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Manage Plants</h1>

        {/* Add Plant Form */}
        <form
          onSubmit={handleAddPlant}
          className="bg-white p-6 rounded-2xl shadow-sm border mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <input
            type="text"
            placeholder="Plant Name"
            value={newPlant.name}
            onChange={(e) => setNewPlant({ ...newPlant, name: e.target.value })}
            className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Category"
            value={newPlant.category}
            onChange={(e) => setNewPlant({ ...newPlant, category: e.target.value })}
            className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-green-500"
          />
          <input
            type="number"
            placeholder="Price"
            value={newPlant.price}
            onChange={(e) => setNewPlant({ ...newPlant, price: e.target.value })}
            className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="sm:col-span-3 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
          >
            + Add Plant
          </button>
        </form>

        {/* Plants Table */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Plant List</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 border">ID</th>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Category</th>
                <th className="p-3 border">Price (Rs.)</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {plants.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center p-4 text-gray-500">
                    No plants available
                  </td>
                </tr>
              ) : (
                plants.map((plant) => (
                  <tr key={plant.id} className="hover:bg-gray-50">
                    <td className="p-3 border">{plant.id}</td>
                    <td className="p-3 border">{plant.name}</td>
                    <td className="p-3 border">{plant.category}</td>
                    <td className="p-3 border">Rs. {plant.price}</td>
                    <td className="p-3 border">
                      <button
                        onClick={() => handleDelete(plant.id)}
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
