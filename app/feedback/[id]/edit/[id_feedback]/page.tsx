import { FeedbackForm } from "@/app/components/FeedbackForm";
import data from "../../../../data.json";

export default function page({ params }: { params: { num: number } }) {
  console.log(params);
  return <FeedbackForm isEdit={true} params={params} />;
}
