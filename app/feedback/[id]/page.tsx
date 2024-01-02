import data from "../../data.json";
import { NoComment } from "@/app/components/NoComment";
import { ProductPage } from "@/app/components/ProductPage";

export default function page({ params }: { params: { id: number } }) {
  return (
    <main className="w-screen flex min-h-screen justify-center  bg-[#f7f8fd]  items-center">
      <div className="flex  max-w-screen-md gap-4 h-full p-7 flex-col   w-full ">
        <div className="bg-[#ffffff] ">
          <ProductPage params={params} />
        </div>

        <NoComment />
      </div>
    </main>
  );
}
