import { SvgNoFeedBack } from "./Svgs";

export const NoFeedBack = () => {
  return (
    <div className="bg-white w-full items-center justify-center flex flex-col p-32 gap-10">
      <SvgNoFeedBack />
      <h1 className="text-[#3a4374] text-xl font-bold">
        There is no feedback yet
      </h1>
      <p className="text-[#687498] text-center ">
        Got a suggestion? Found a bug that needs to be squashed? <br />
        We love hearing about new ideas to improve our app.
      </p>
      link here
      {/* <Link></Link> */}
    </div>
  );
};
