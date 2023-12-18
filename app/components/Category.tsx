"use client";
import { useEffect, useState } from "react";
import data from "../data.json";
import { useMyStore } from "./Store";
const ALL_CATEGORY = "All";
const categories = [ALL_CATEGORY, "UI", "UX", "enhancement", "feature", "bug"];
export const Category = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>(ALL_CATEGORY);
  const { setFilteredItems } = useMyStore();

  const updateFilteredItems = (category: string) => {
    const isAllCategory = category === ALL_CATEGORY;
    const filteredData = isAllCategory
      ? data.productRequests
      : data.productRequests.filter((item) => item.category === category);

    setFilteredItems(filteredData);
    setSelectedCategory(category);
  };

  useEffect(() => {
    updateFilteredItems(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-white p-8 w-64 rounded-lg">
      <ul className="flex flex-wrap gap-8">
        {categories.map((category) => (
          <li key={category}>
            <button
              className="text-sm "
              onClick={() => updateFilteredItems(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
