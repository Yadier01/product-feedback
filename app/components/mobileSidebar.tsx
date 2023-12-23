"use client";

import { Category } from "./Category";
import { CategoryMap } from "./CategoryMap";
import { Roadmap } from "./Roadmap";
import { useMyStore } from "./Store";

export const MobileSidebar = () => {
  const { isOpen } = useMyStore();
  return (
    <>
      {isOpen && (
        <div className=" flex px-5  z-30 flex-col items-center gap-10  shadow-2xl h-full absolute right-0 bg-[#f7f8fd] pt-32  w-72">
          <div className="flex flex-col gap-10">
            <Category />
            <Roadmap />
          </div>
        </div>
      )}
    </>
  );
};
