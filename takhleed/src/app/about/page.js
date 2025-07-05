import Image from "next/image";
import Stories from "@/components/Stories";
import Traces from "@/components/Traces";
import Strategy from "@/components/Strategy";
import Promises from "@/components/Promises";
import Partners from "@/components/Partners";



export default function About() {
  return (
    <div>
      <main>
        <Stories />
        <Traces />
        <Strategy />
        <Promises />
        <Partners />

       
      </main>
    </div>
  );
}
