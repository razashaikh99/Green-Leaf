import React from "react";

const CATEGORIES = ["All", "Indoor", "Outdoor", "Flowering", "Air-Purifying", "Seasonal"];
const CARE_LEVELS = ["All", "Easy", "Medium", "Hard"];

export default function PlantFilters({
  query,
  setQuery,
  category,
  setCategory,
  care,
  setCare,
  sort,
  setSort,
  clearFilters,
}) {
  const hasActiveFilters =
    query.trim() !== "" || category !== "All" || care !== "All" || sort !== "none";

  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
      {/* Search */}
      <input
        type="text"
        placeholder="Search plant or botanical name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full sm:w-64 px-4 py-2 rounded-lg border outline-none focus:ring-2 focus:ring-green-500"
      />

      {/* Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-3 py-2 rounded-lg border focus:ring-2 focus:ring-green-500"
      >
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* Care Level */}
      <select
        value={care}
        onChange={(e) => setCare(e.target.value)}
        className="px-3 py-2 rounded-lg border focus:ring-2 focus:ring-green-500"
      >
        {CARE_LEVELS.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* Sort */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="px-3 py-2 rounded-lg border focus:ring-2 focus:ring-green-500"
      >
        <option value="none">Sort</option>
        <option value="price-asc">Price: Low → High</option>
        <option value="price-desc">Price: High → Low</option>
        <option value="name-asc">Name: A → Z</option>
      </select>

      {/* Reset Button */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="px-3 py-2 rounded-lg border hover:bg-gray-100"
          title="Clear filters"
        >
          Reset
        </button>
      )}
    </div>
  );
}
