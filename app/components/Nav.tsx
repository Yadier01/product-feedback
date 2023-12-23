import Link from "next/link";
interface Props {
  mobile?: boolean;
}

export const Nav = ({ mobile }: Props) => {
  return (
    <section
      className={`bg-[#373f68]  min-h-20 flex w-full items-center  ${
        mobile ? "" : "rounded-lg"
      } `}
    >
      <nav className="flex items-center justify-between w-full p-3 ">
        <div className="flex gap-3 text-white items-center">
          <h3 className="font-bold text-lg">6 Suggestion</h3>
          <p className="text-sm">
            Sort by:
            <select
              name="upvotes"
              id=""
              className=" font-bold text-md   text-white bg-[#373f68]"
            >
              <option value="mostUpvotes">most upvotes</option>
              <option value="lestUpvotes"> least Upvotes </option>
              <option value="leastComments">most comments</option>
              <option value="lestComments"> least comments</option>
            </select>
          </p>
        </div>
        <Link
          href={"/feedback/add"}
          className="bg-[#ad1fea] px-5 py-3 text-white font-semibold rounded-xl"
        >
          + Add FeedBack
        </Link>
      </nav>
    </section>
  );
};
