import { Roadmap } from "./components/Roadmap";
import { Category } from "./components/Category";
import { CategoryMap } from "./components/CategoryMap";
import { Square } from "./components/Square";
import { ButtonBurger } from "./components/ButtonBurger";
import { MobileSidebar } from "./components/mobileSidebar";
import { Nav } from "./components/Nav";

export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col md:justify-center md:items-center    bg-[#f7f8fd]  ">
      <div className="lg:flex hidden py-32 justify-center  min-h-screen gap-4 max-w-[1100px] w-full  ">
        <div className="flex flex-col gap-4 w-fit">
          <Square />
          <Category />
          <Roadmap />
        </div>
        <div className=" flex flex-col  w-full h-full   gap-8  ">
          <Nav />
          <CategoryMap />
        </div>
      </div>

      <div className=" md:flex p-10 flex-col hidden lg:hidden w-full ">
        <div className="flex h-fit  w-full gap-4   ">
          <div className="min-h-full min-w-[255px] rounded-xl text-white flex flex-col justify-end p-3 bg-gradient-to-tr from-[#4d7ee8] via-purple-500 to-pink-500">
            <h4 className="font-bold text-lg">Fronted Mentor</h4>
            <p>Feedback board</p>
          </div>
          <Category />
          <Roadmap />
        </div>
        <span className="my-7">
          <Nav />
        </span>
        <CategoryMap />
      </div>

      <div className="flex relative flex-col md:hidden">
        <div className="h-20  z-50 w-full flex justify-between relative items-center p-3 text-white bg-gradient-to-tr from-[#4d7ee8] via-purple-500 to-pink-500 ">
          <div className="text-white ">
            <h3 className="fond-bold text-md">Frontend Mentor</h3>
            <p className="text-xs">Feedback board</p>
          </div>
          <ButtonBurger />
        </div>

        <MobileSidebar />
        <Nav mobile={true} />
        <div className="m-4  ">
          <CategoryMap />
        </div>
      </div>
    </main>
  );
}
