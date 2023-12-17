"use client";
import { useEffect, useState } from "react";
import data from "../data.json";

interface Item {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  upvoted: boolean;
  status: string;
  description: string;
}

export const Category = () => {
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  const filterCategories = (category: string) => {
    if (category === "All") {
      setFilteredItems(data.productRequests);
    } else {
      const filteredData = data.productRequests.filter(
        (item) => item.category === category
      );

      setFilteredItems(filteredData);
    }
  };

  useEffect(() => {
    setFilteredItems(data.productRequests);
  }, []);
  const categories = ["All", "UI", "UX", "enhancement", "feature", "bug"];

  return (
    <div>
      <ul>
        {categories.map((c) => (
          <li key={c}>
            <button onClick={() => filterCategories(c)}>{c}</button>
          </li>
        ))}
      </ul>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id} className="bg-red-300">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
