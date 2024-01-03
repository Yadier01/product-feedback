export const Comment = ({ comment }: any) => {
  return (
    <article className=" text-xs p-3  hyphens-auto ">
      <div className="b-6 mb-4">
        <div className="flex  justify-between gap-4 mb-3">
          <span className="flex  gap-4">
            <img
              src={comment.user.image}
              alt=""
              className="rounded-full h-10"
            />
            <div>
              <p className="font-bold text-md text-[#3a4374] text-md">
                {comment.user.name}
              </p>
              <p className="text-xs text-[#647196]">@{comment.user.username}</p>
            </div>
          </span>

          <button
            className="text-[#4660e6] self-end  font-bold  mb-1  "
            onClick={() => console.log(comment.id)}
          >
            Reply
          </button>
        </div>

        {!comment.replyingTo && (
          <p className="text-sm text-[#647196] ">{comment.content}</p>
        )}
      </div>
      <div className="flex  g-3 ">
        {comment.replyingTo && (
          <div className="">
            <p className="text-[#ad1fea] font-bold text-sm inline mr-1">
              @{comment.replyingTo}
            </p>
            <p className="text-sm  inline  text-[#647196] ">
              {comment.content}
            </p>
          </div>
        )}
      </div>
      {comment.replies?.map((reply: any) => (
        <div className="pl-5 text-xs " key={reply.user.name}>
          <Comment comment={reply} key={reply.user.name} />
        </div>
      ))}
    </article>
  );
};
