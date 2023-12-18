export const Comment = ({ comment }: any) => {
  return (
    <div className="p-1 mb-3">
      <div className="b-6 mb-4">
        <div className="flex gap-4 mb-3">
          <img src={comment.user.image} alt="" className="rounded-full h-10" />
          <div>
            <p className="font-bold text-md">{comment.user.name}</p>
            <p className="text-sm">@{comment.user.username}</p>
          </div>
        </div>

        {!comment.replyingTo && <p className="text-sm">{comment.content}</p>}
      </div>
      <div className="flex flex-col g-3 ">
        {comment.replyingTo && (
          <p className="text-sm">
            <span className="text-[#ad1fea] font-bold">
              @{comment.replyingTo}
            </span>
            {comment.content}
          </p>
        )}
      </div>
      {comment.replies?.map((reply: any) => (
        <div className="pl-5">
          <Comment comment={reply} />
        </div>
      ))}
    </div>
  );
};
