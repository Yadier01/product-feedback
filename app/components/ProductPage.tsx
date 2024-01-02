"use client";

import Link from "next/link";
import { useMyStore } from "./Store";
import { ProductRequest } from "./ProductRequest";
import { Comment } from "./Comment";
export const ProductPage = ({ params }: any) => {
  const { filteredItems } = useMyStore();
  const item = filteredItems.find((item) => item.id === Number(params.id));
  console.log(params.id);

  return (
    <>
      <div className="flex justify-between">
        <Link href="/">Go Back</Link>
        <Link href={`/feedback/${item?.id}/edit/${item?.id}`}>Edit</Link>
      </div>

      <div className="bg-white rounded-md ">
        <ProductRequest item={item} />
      </div>
      <div className="flex flex-col gap-6 p-8  bg-white   rounded-lg">
        {
          <h3 className="font-bold text-lg">
            {item?.comments?.length} Comment
          </h3>
        }
        {item?.comments?.map((comment) => (
          <>
            <Comment comment={comment} key={comment.id} />
          </>
        ))}
      </div>
    </>
  );
};
