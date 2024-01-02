"use client";
import Link from "next/link";
import { useMyStore } from "./Store";
interface Props {
  mobile?: boolean;
}

export const Nav = ({ mobile }: Props) => {
  const { filteredItems, setFilteredItems } = useMyStore();
  const sortBy = [
    "most upvotes",
    "least upvotes",
    "most comments",
    "least comments",
  ];

  const handleChange = (e: any) => {
    let sortedItems;

    switch (e.target.value) {
      case "most upvotes":
        sortedItems = [...filteredItems].sort((a, b) => b.upvotes - a.upvotes);
        break;
      case "least upvotes":
        sortedItems = [...filteredItems].sort((a, b) => a.upvotes - b.upvotes);
        break;
      case "most comments":
        sortedItems = [...filteredItems].sort(
          (a, b) => (b.comments?.length || 0) - (a.comments?.length || 0)
        );
        break;
      case "least comments":
        sortedItems = [...filteredItems].sort(
          (a, b) => (a.comments?.length || 0) - (b.comments?.length || 0)
        );
        break;
      default:
        sortedItems = filteredItems;
    }

    setFilteredItems(sortedItems);
  };
  return (
    <section
      className={`bg-[#373f68]  min-h-20 flex w-full items-center  ${
        mobile ? "" : "rounded-lg"
      } `}
    >
      <nav className="flex items-center justify-between w-full p-3 ">
        <div className="flex gap-3 text-white items-center">
          <h3 className="font-bold text-lg">6 Suggestion</h3>
          <p className="text-sm">
            Sort by:
            <select
              name="upvotes"
              id=""
              className=" font-bold text-md p-1   text-white bg-[#373f68]"
              onChange={handleChange}
            >
              {sortBy.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </p>
        </div>
        <Link
          href={"/feedback/add"}
          className="bg-[#ad1fea] px-5 py-3 text-white font-semibold rounded-xl"
        >
          + Add FeedBack
        </Link>
      </nav>
    </section>
  );
};
