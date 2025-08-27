import React, { useMemo, useState } from "react";
import PlantFilters from "./PlantFilters";
import PlantCard from "./PlantCard"; // 👈 ab alag file se import ho raha hai

const INITIAL_PLANTS = [
    {
        id: 1,
        name: "Snake Plant",
        botanical_name: "Sansevieria trifasciata",
        category: "Indoor",
        care_level: "Easy",
        light_requirement: "Low to Bright Indirect",
        watering_schedule: "Every 2–3 weeks",
        price: 1800,
        image:
            "https://images.unsplash.com/photo-1587306552252-c8e9d1f69f6a?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 2,
        name: "Peace Lily",
        botanical_name: "Spathiphyllum wallisii",
        category: "Indoor",
        care_level: "Medium",
        light_requirement: "Low to Medium Indirect",
        watering_schedule: "Weekly",
        price: 2200,
        image:
            "https://images.unsplash.com/photo-1614594853511-6b7f6f9b52f7?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 3,
        name: "Rose",
        botanical_name: "Rosa",
        category: "Outdoor",
        care_level: "Medium",
        light_requirement: "Full Sun",
        watering_schedule: "2–3x per week",
        price: 1500,
        image:
            "https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 4,
        name: "Jasmine",
        botanical_name: "Jasminum sambac",
        category: "Outdoor",
        care_level: "Easy",
        light_requirement: "Full Sun to Partial Shade",
        watering_schedule: "2x per week",
        price: 1700,
        image:
            "https://images.unsplash.com/photo-1520975867597-0af37a22e31c?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 5,
        name: "Aloe Vera",
        botanical_name: "Aloe barbadensis miller",
        category: "Air-Purifying",
        care_level: "Easy",
        light_requirement: "Bright Indirect",
        watering_schedule: "Every 2–3 weeks",
        price: 900,
        image:
            "https://images.unsplash.com/photo-1586016413669-667a5d50cba7?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 6,
        name: "Lavender",
        botanical_name: "Lavandula angustifolia",
        category: "Flowering",
        care_level: "Hard",
        light_requirement: "Full Sun",
        watering_schedule: "Weekly (well-drained)",
        price: 2000,
        image:
            "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 7,
        name: "Poinsettia",
        botanical_name: "Euphorbia pulcherrima",
        category: "Seasonal",
        care_level: "Medium",
        light_requirement: "Bright Indirect",
        watering_schedule: "Weekly",
        price: 1300,
        image:
            "https://images.unsplash.com/photo-1544185310-0b3cf501672d?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 8,
        name: "Monstera",
        botanical_name: "Monstera deliciosa",
        category: "Indoor",
        care_level: "Medium",
        light_requirement: "Bright Indirect",
        watering_schedule: "Weekly",
        price: 3500,
        image:
            "https://images.unsplash.com/photo-1584559582184-23e1e7f3d1ca?q=80&w=800&auto=format&fit=crop",
    },
];

export default function PlantList() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("All");
    const [care, setCare] = useState("All");
    const [sort, setSort] = useState("none");

    const filtered = useMemo(() => {
        let data = [...INITIAL_PLANTS];

        // Search
        if (query.trim()) {
            const q = query.toLowerCase();
            data = data.filter(
                (p) =>
                    p.name.toLowerCase().includes(q) ||
                    p.botanical_name.toLowerCase().includes(q)
            );
        }

        // Category filter
        if (category !== "All") {
            data = data.filter((p) => p.category === category);
        }

        // Care level filter
        if (care !== "All") {
            data = data.filter((p) => p.care_level === care);
        }

        // Sorting
        if (sort === "price-asc") data.sort((a, b) => a.price - b.price);
        if (sort === "price-desc") data.sort((a, b) => b.price - a.price);
        if (sort === "name-asc")
            data.sort((a, b) =>
                a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
            );

        return data;
    }, [query, category, care, sort]);

    const clearFilters = () => {
        setQuery("");
        setCategory("All");
        setCare("All");
        setSort("none");
    };

    const handleAddToCart = (plant) => {
        console.log("Add to Cart:", plant);
        alert(`${plant.name} added to cart (demo)`);
    };

    const handleAddToGarden = (plant) => {
        console.log("Add to My Garden:", plant);
        alert(`${plant.name} added to My Garden (demo)`);
    };

    return (
        <section className="min-h-screen bg-gray-50">
            {/* Header + Controls */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Plant Catalog</h1>
                        <p className="text-gray-600 mt-1">
                            Browse plants, filter by category & care level, and sort by price or name.
                        </p>
                    </div>

                    {/* 👇 PlantFilters component use kiya */}
                    <PlantFilters
                        query={query}
                        setQuery={setQuery}
                        category={category}
                        setCategory={setCategory}
                        care={care}
                        setCare={setCare}
                        sort={sort}
                        setSort={setSort}
                        clearFilters={clearFilters}
                    />
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                {filtered.length === 0 ? (
                    <div className="bg-white border rounded-2xl p-10 text-center text-gray-600">
                        No plants found. Try different search or filters.
                    </div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filtered.map((plant) => (
                            <PlantCard
                                key={plant.id}
                                plant={plant}
                                onAddToCart={handleAddToCart}
                                onAddToGarden={handleAddToGarden}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
