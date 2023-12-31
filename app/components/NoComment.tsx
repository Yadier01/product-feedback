"use client";
import { useState } from "react";
import { useMyStore } from "./Store";
export const NoComment = () => {
  const [userComment, setUserComment] = useState("");
  const [charLenght, setCharLenght] = useState(255);
  const { filteredItems } = useMyStore();
  const inputHandler = (e: any) => {
    if (e.target.value.length > 256) return;

    setCharLenght(255 - e.target.value.length);
    setUserComment(e.target.value);
  };
  return (
    <div className="flex rounded-lg flex-col gap-6  bg-white p-6 lg:p-8">
      <p>Add Comment</p>
      <textarea
        name=""
        value={userComment}
        onChange={inputHandler}
        id=""
        className="w-full h-20 p-4  bg-[#f7f8fd]"
        placeholder="Type your comment here"
      ></textarea>
      <div className="flex justify-between  items-center mt-2">
        <p>{charLenght} characters left</p>
        <button className="bg-[#ad1fea] font-bold text-sm text-white p-3 px-7 rounded-xl">
          Post Comment
        </button>
      </div>
    </div>
  );
};
