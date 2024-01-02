"use client";
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
    <div className="bg-white p-4 px-8  max-w-full">
      <h3 className="font-bold text-lg">Roadmap</h3>
      {statuses.map((status) => (
        <div key={status} className=" flex justify-between  capitalize lex ">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-[#f49f85]"></div>

            <p>{status}:</p>
          </div>
          <span> {getStatusCount(status)}</span>
        </div>
      ))}
    </div>
  );
};
