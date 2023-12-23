import data from "../../data.json";
import { Comment } from "../../components/Comment";
import { ProductRequest } from "@/app/components/ProductRequest";
import Link from "next/link";
import { NoComment } from "@/app/components/NoComment";
import { it } from "node:test";

export default function page({ params }: { params: { id: number } }) {
  const item = data.productRequests.find((item) => item.id == params.id);
  console.log(item);
  console.log(item?.comments.length === 0);

  return (
    <main className="w-screen flex min-h-screen justify-center  bg-[#f7f8fd]  items-center">
      <div className="flex  max-w-screen-md gap-4 h-full p-7 flex-col   w-full ">
        <div className="flex justify-between">
          <Link href="/">Go Back</Link>
          <Link href={`/feedback/${item?.id}/edit/${item?.id}`}>Edit</Link>
        </div>
        <div className="bg-[#ffffff] ">
          <ProductRequest item={item} />
        </div>
        <div className="flex flex-col gap-6 p-8  bg-white   rounded-lg">
          {
            <h3 className="font-bold text-lg">
              {item?.comments.length} Comment
            </h3>
          }
          {item?.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
        <NoComment />
      </div>
    </main>
  );
}
