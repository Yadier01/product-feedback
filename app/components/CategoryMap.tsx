"use client";
import { useEffect, useState } from "react";
import { NoFeedBack } from "./NoFeedBack";
import { Item, useMyStore } from "./Store";
import Link from "next/link";
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
    if (filteredItems.length) {
      setIsLoading(false);
    }
  }, [filteredItems]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="  flex flex-col gap-4">
      {filteredItems.length === 0 ? (
        <NoFeedBack />
      ) : (
        filteredItems.map((item) => (
          <Link
            href={`/feedback/${item.id}`}
            key={item.id}
            className="p-10  bg-white gap-4 flex items-center justify-between "
          >
            <div className="flex gap-10">
              <button
                onClick={() => incrementUpvotes(item.id)}
                className="flex flex-col h-fit rounded-lg gap-1  px-2  py-4 w-10    items-center bg-[#f2f4ff]"
              >
                <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 6l4-4 4 4"
                    stroke="#4661E6"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
                <p className="text-xs font-bold"> {item.upvotes}</p>
              </button>
              <div>
                <p>{item.title}</p>
                <p>{item.description}</p>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};
