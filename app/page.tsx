import { Roadmap } from "./components/Roadmap";
import { Category } from "./components/Category";
import { CategoryMap } from "./components/CategoryMap";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col md:justify-center md:items-center    bg-[#f7f8fd]  ">
      <div className="lg:flex hidden  gap-4  item-center  justify-center  ">
        <div className="flex flex-col gap-4 w-fit">
          <div className="h-52 w-full bg-gradient-to-tr from-[#4d7ee8] via-purple-500 to-pink-500"></div>
          <Category />
          <Roadmap />
        </div>
        <div className=" flex flex-col   gap-8  ">
          <header className="bg-[#373f68] h-20 flex items-center rounded-lg ">
            <nav className="flex items-center justify-between w-full p-3">
              <h3>6 Suggestion</h3>
              <p>Sort by: most upvtoes</p>
              <Link
                href={"/feedback/add"}
                className="bg-[#ad1fea] px-5 py-3 text-white font-semibold rounded-xl"
              >
                + Add FeedBack
              </Link>
            </nav>
          </header>
          <CategoryMap />
        </div>
      </div>

      <div className="md:flex flex-col hidden ">
        <div className="flex h-fit  w-full gap-4 ">
          <div className="h-52 w-52    bg-gradient-to-tr from-[#4d7ee8] via-purple-500 to-pink-500"></div>
          <Category />
          <Roadmap />
        </div>

        <header className="bg-[#373f68] h-20 flex items-center rounded-lg ">
          <nav className="flex items-center justify-between w-full p-3">
            <h3>6 Suggestion</h3>
            <p>Sort by: most upvtoes</p>
            <Link
              href={"/feedback/add"}
              className="bg-[#ad1fea] px-5 py-3 text-white font-semibold rounded-xl"
            >
              + Add FeedBack
            </Link>
          </nav>
        </header>

        <CategoryMap />
      </div>

      <div className="flex flex-col md:hidden">
        <div className="h-20 w-full bg-gradient-to-tr from-[#4d7ee8] via-purple-500 to-pink-500"></div>
        <header className="bg-[#373f68] h-20 flex items-center  ">
          <nav className="flex items-center justify-between w-full p-3">
            <h3 className="hidden sm:flex">6 Suggestion</h3>
            <p>Sort by: most upvtoes</p>
            <Link
              href={"/feedback/add"}
              className="bg-[#ad1fea] px-5 py-3 text-white font-semibold rounded-xl"
            >
              + Add FeedBack
            </Link>
          </nav>
        </header>

        <div className="m-4  ">
          <CategoryMap />
        </div>
      </div>
    </main>
  );
}
