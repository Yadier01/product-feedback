import data from "../../data.json";
import { Comment } from "../../components/Comment";

export default function page({ params }: { params: { id: number } }) {
  const item = data.productRequests.find((item) => item.id == params.id);
  console.log(item);

  return (
    <div className="flex bg-[#f7f8fd] h-screen p-7 flex-col   w-full max-w-screen-lg">
      <div className="bg-[#ffffff] h-full">
        <h3>{item?.title}</h3>
        <p>{item?.description}</p>
        <div className="flex justify-between h-full">
          <p>{item?.upvotes}</p>
          <p>{item?.comments.length}</p>
        </div>
      </div>
      {item?.comments.map((comment) => (
        <div className=" bg-[#ffffff] p-4 h-full ">
          <Comment comment={comment} />
        </div>
      ))}
    </div>
  );
}
