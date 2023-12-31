"use client";
import React, { useState } from "react";
import data from "@/app/data.json";
import { SvgEditFeedback, SvgNewFeedback } from "./Svgs";
import { useRouter } from "next/navigation";
import { useMyStore } from "./Store";
import { BttnSave } from "./FeedBackFormUI/BttnSave";
interface Props {
  isEdit: boolean;
  params?: any;
}

export const FeedbackForm = ({ isEdit, params }: Props) => {
  const nameFeedback = data.productRequests.find(
    (item) => item.id == params?.id
  );
  const [title, setTitle] = useState<string | any>(nameFeedback?.title);
  const [description, setDescription] = useState<string | any>(
    nameFeedback?.description
  );

  const { filteredItems, setFilteredItems, deleteItem, addItem } = useMyStore();
  const [category, setCategory] = useState<string | any>("");
  const [status, setStatus] = useState<string | any>("");
  const [newFeedback, setNewFeedBack] = useState({
    id: filteredItems.length + 1,
    title: "",
    category: "bug",
    upvotes: 0,
    upvoted: false,
    status: "suggestion",
    description: "description",
    comments: [],
  });
  const router = useRouter();

  const tiltleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const categoryChange = (e: any) => {
    setDescription(e.target.value);
  };
  const isEdits = isEdit ? (
    <h3 className="text-lg my-6 text-[#3a4374] font-bold">
      Editing {nameFeedback?.title}
    </h3>
  ) : (
    <h3 className="text-lg">Create New Feedback</h3>
  );
  const Category = ["Feature", "UI", "UX", "Enhancement", "Bug"];
  const Status = ["Suggestion", "Planned", "In-Progress", "Live"];

  const deleteHandler = (id: number) => {
    const numberId = Number(id);
    deleteItem(numberId);
    router.push("/");
  };
  const saveHandler = () => {
    const updatedFeedback = {
      ...newFeedback,
      title: title,
      description: description,
      category: category,
      status: status,
    };

    addItem(updatedFeedback);

    router.push("/");
  };
  const saveEditHandler = () => {
    const newItems = filteredItems.map((item) =>
      Number(item.id) === Number(params?.id)
        ? {
            ...item,
            title: title,
            description: description,
            category: category,
            status: status,
          }
        : item
    );
    console.log(newItems);
    setFilteredItems(newItems);

    localStorage.setItem("filteredItems", JSON.stringify(newItems));

    router.push("/");
  };

  const categoryHandleChange = (e: any) => {
    setCategory(e.target.value);
    console.log(e.target.value);
  };

  const statusHandleChange = (e: any) => {
    setStatus(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className=" h-screen bg-[#f7f8fd] w-screen text-sm flex flex-col justify-center  items-center">
      <div className="bg-white relative p-10  max-w-lg ">
        <div className="absolute -top-5 ">
          {params === undefined ? <SvgEditFeedback /> : <SvgNewFeedback />}
        </div>
        {isEdits}
        <form
          action=""
          className="flex flex-col gap-10 "
          onSubmit={(e: any) => e.preventDefault()}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="feedback" className="text-[#3a4374] font-bold">
              Feedback Title
            </label>
            <p className="text-[#647196]">Add a short, descriptive headline</p>
            <input
              type="text"
              name="feedback"
              className="bg-[#f7f8fd] p-3 rounded-lg"
              value={title}
              onChange={tiltleChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="category" className="text-[#3a4374] font-bold">
              Category
            </label>
            <p className="text-[#647196]">
              Choose a category for your feedback
            </p>
            <select
              name=""
              id=""
              className="rounded-md p-3"
              onChange={categoryHandleChange}
            >
              {Category.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className={`w-full ${isEdit ? "block " : "hidden"}`}>
            <label htmlFor="UpdateStatus" className="text-[#3a4374] font-bold">
              Upade Status
            </label>
            <p className="text-[#647196]">Change feature state</p>
            <select
              name="updateSatus"
              className="rounded-md p-3 w-full"
              onChange={statusHandleChange}
            >
              {params &&
                Status.map((item) => (
                  <option
                    key={item}
                    value={item}
                    onClick={() => console.log(item)}
                  >
                    {item}
                  </option>
                ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="feedbackDetail"
              className="text-[#3a4374] font-bold"
            >
              Feedback Detail
            </label>
            <p className="text-[#647196]">
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <textarea
              name="feedbackDetail"
              id=""
              rows={4}
              className=" text-[#3a4374] rounded-md resize-none overflow-y-auto bg-[#f7f8fd] p-2"
              onChange={categoryChange}
              value={description}
            ></textarea>
          </div>

          <div
            className={`flex justify-between ${
              params && "justify-center"
            } w-full`}
          >
            {params && (
              <button
                onClick={() => deleteHandler(params.id)}
                className="bg-[#d73737] p-3 rounded-lg text-white font-bold"
              >
                Delete
              </button>
            )}
            <div
              className={`flex gap-4 ${
                params === undefined && "justify-end w-full"
              }`}
            >
              <button
                onClick={() => router.back()}
                className="bg-[#3a4374] p-3 rounded-lg text-white font-bold"
              >
                Cancel
              </button>
              <BttnSave
                isEdit={isEdit}
                saveEditHandler={saveEditHandler}
                saveHandler={saveHandler}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
