"use client";

import { SvgsArrowUp, SvgsComments } from "./Svgs";

interface ProductRequestProps {
  item: any;
  incrementUpvotes?: any;
}

export const ProductRequest = ({
  item,
  incrementUpvotes,
}: ProductRequestProps) => {
  return (
    <div className="flex gap-5 p-8 flex-col text-sm w-full">
      <div className="flex  flex-col md:flex-row  gap-2 justify-between">
        <div className="flex">
          {/* upvotes button hidden normal  flex if md */}
          <button
            onClick={() => incrementUpvotes(item.id)}
            className="md:flex  h-fit rounded-lg gap-2 bg-[#f2f4ff] px-2  py-2 w-14  hidden    items-center bg-[#f2f4fftext-[#647196]"
          >
            <SvgsArrowUp />
            <p className="text-xs font-bold "> {item.upvotes}</p>
          </button>
          {/*  */}
          <span className="ml-4 flex flex-col gap-2">
            <p className="text-[#3a4374] font-bold">{item.title}</p>
            <p className="text-[#647196]">{item.description}</p>
            <p className="w-fit px-3 py-1 rounded-lg capitalize text-[#4661e6] font-bold text-xs bg-[#f2f4ff]">
              {item.category}
            </p>
          </span>
        </div>

        <span className="md:flex items-center gap-2 hidden ">
          <SvgsComments />
          <p className="text-[#3a4374] font-bold ">{item.comments.length}</p>
        </span>
      </div>

      {/* upvotes & Svgcomments if md:hidden */}
      <div className="flex items-center justify-between text-sm md:hidden ">
        <button
          onClick={() => incrementUpvotes(item.id)}
          className="flex  h-fit rounded-lg gap-2 bg-[#f2f4ff] px-2  py-2 w-14      items-center bg-[#f2f4fftext-[#647196]]"
        >
          <SvgsArrowUp />
          <p className="text-xs font-bold "> {item.upvotes}</p>
        </button>
        <div className="flex items-center gap-3 ">
          <SvgsComments />
          <p className="text-[#3a4374] font-bold ">{item.comments.length}</p>
        </div>
      </div>
    </div>
  );
};
