import data from "../../data.json";
import { Comment } from "../../components/Comment";
import { ProductRequest } from "@/app/components/ProductRequest";
import Link from "next/link";

export default function page({ params }: { params: { id: number } }) {
  const item = data.productRequests.find((item) => item.id == params.id);
  console.log(item);

  return (
    <>
      <main className="w-screen flex  justify-center  bg-[#f7f8fd]  items-center">
        <div className="flex max-w-screen-lg gap-4 h-screen p-7 flex-col   w-full ">
          <div className="flex justify-between">
            <Link href="/">Go Back</Link>
            <Link href={`/feedback/${item?.id}/edit/${item?.id}`}>Edit</Link>
          </div>
          <div className="bg-[#ffffff] ">
            <ProductRequest item={item} />
          </div>
          <div className="bg-white p-6 lg:p-8">
            {item?.comments.map((comment) => (
              <Comment comment={comment} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
