export const Comment = ({ comment }: any) => {
  return (
    <div className=" text-xs lg:p-6 hyphens-auto  ">
      <div className="b-6 mb-4">
        <div className="flex gap-4 mb-3">
          <img src={comment.user.image} alt="" className="rounded-full h-10" />
          <div>
            <p className="font-bold text-md text-[#3a4374] text-md">
              {comment.user.name}
            </p>
            <p className="text-xs text-[#647196]">@{comment.user.username}</p>
          </div>
        </div>

        {!comment.replyingTo && (
          <p className="text-sm text-[#647196]">{comment.content}</p>
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
        <div className="pl-5 text-xs" key={reply.user.name}>
          <Comment comment={reply} key={reply.user.name} />
        </div>
      ))}
    </div>
  );
};
