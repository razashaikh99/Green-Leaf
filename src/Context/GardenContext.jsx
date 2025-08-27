import React, { createContext, useContext, useState, useEffect } from "react";

// Context create
const GardenContext = createContext();

// Custom hook
export const useGarden = () => useContext(GardenContext);

export const GardenProvider = ({ children }) => {
  const [garden, setGarden] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const storedGarden = localStorage.getItem("myGarden");
    if (storedGarden) {
      setGarden(JSON.parse(storedGarden));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("myGarden", JSON.stringify(garden));
  }, [garden]);

  // Add plant
  const addToGarden = (plant) => {
    setGarden((prev) => {
      const exists = prev.find((p) => p.id === plant.id);
      if (exists) return prev; // duplicate avoid
      return [...prev, plant];
    });
  };

  // Remove plant
  const removeFromGarden = (id) => {
    setGarden((prev) => prev.filter((p) => p.id !== id));
  };

  // Clear all plants
  const clearGarden = () => {
    setGarden([]);
  };

  const value = {
    garden,
    addToGarden,
    removeFromGarden,
    clearGarden,
    gardenCount: garden.length,
  };

  return (
    <GardenContext.Provider value={value}>{children}</GardenContext.Provider>
  );
};
