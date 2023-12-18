import Image from "next/image";
import { Roadmap } from "./components/Roadmap";
import { Category } from "./components/Category";
import { CategoryMap } from "./components/CategoryMap";

export default function Home() {
  return (
    <main className=" min-h-screen    bg-[#f7f8fd]  p-24">
      <div className="flex  item-center justify-center  w-2/3">
        <div className="flex flex-col gap-4 w-fit">
          <Category />
          <Roadmap />
        </div>
        <div className="min-w-[815px] flex flex-col gap-8 ml-4 ">
          <header className="bg-[#373f68] h-20 flex items-center rounded-lg ">
            <nav className="flex items-center justify-between w-full p-3">
              <h3>6 Suggestion</h3>
              <p>Sort by: most upvtoes</p>
              <button className="bg-[#ad1fea] px-5 py-3 text-white font-semibold rounded-xl">
                + Add FeedBack
              </button>
            </nav>
          </header>
          <CategoryMap />
        </div>
      </div>
    </main>
  );
}
