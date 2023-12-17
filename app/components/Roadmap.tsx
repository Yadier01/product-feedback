"use client";
import { useEffect } from "react";
import data from "../data.json";

export const Roadmap = () => {
  const getStatusCount = (status: string) => {
    const statusFiltered = data.productRequests.filter(
      (item) => item.status === status
    );
    return new Set(statusFiltered).size;
  };

  const statuses = ["planned", "in-progress", "live"];

  return (
    <div>
      <h3>Roadmap</h3>
      <ul className=" list-disc ">
        {statuses.map((status) => (
          <li key={status} className="  capitalize ">
            {status}: {getStatusCount(status)}
          </li>
        ))}
      </ul>
    </div>
  );
};
