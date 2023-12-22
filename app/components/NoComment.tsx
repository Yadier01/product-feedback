export const NoComment = () => {
  return (
    <div>
      <p>Add Comment</p>
      <textarea
        name=""
        id=""
        className="w-full h-20 p-4  bg-[#f7f8fd]"
        placeholder="Type your comment here"
      ></textarea>
      <div className="flex justify-between">
        <p>255 characters left</p>
        <button>Post Comment</button>
      </div>
    </div>
  );
};
