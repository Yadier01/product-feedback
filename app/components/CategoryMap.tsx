"use client";
import { useEffect, useState } from "react";
import { NoFeedBack } from "./NoFeedBack";
import { Item, useMyStore } from "./Store";
import Link from "next/link";
import { ProductRequest } from "./ProductRequest";
export const CategoryMap = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { filteredItems, setFilteredItems } = useMyStore();

  const incrementUpvotes = (id: number) => {
    const newItems = filteredItems.map((item: Item) =>
      item.id === id && !item.upvoted
        ? { ...item, upvotes: item.upvotes + 1, upvoted: true }
        : item
    );

    setFilteredItems(newItems);
  };

  useEffect(() => {
    setIsLoading(false);
  }, [filteredItems]);

  useEffect(() => {
    const storedItems = localStorage.getItem("filteredItems");
    if (storedItems) {
      setFilteredItems(JSON.parse(storedItems));
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="  w-full flex flex-col gap-4">
      {filteredItems.length === 0 ? (
        <NoFeedBack />
      ) : (
        filteredItems.map((item) => (
          <Link
            className=" rounded-lg shadow-sm w-full bg-white gap-4 flex items-center   justify-between "
            href={`/feedback/${item.id}`}
            key={item.id}
          >
            <ProductRequest
              key={item.id}
              item={item}
              incrementUpvotes={incrementUpvotes}
            />
          </Link>
        ))
      )}
    </div>
  );
};
