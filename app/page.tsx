import Image from "next/image";
import { Roadmap } from "./components/Roadmap";
import { Category } from "./components/Category";

export default function Home() {
  return (
    <main className=" min-h-screen   p-24">
      <Category />
      <Roadmap />
    </main>
  );
}
