import Image from "next/image";
import Hero from "../components/Hero";
import HomeServices from "../components/homeServices";
import President from "@/components/President";
import VideoHome from "@/components/VideoHome";



export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <HomeServices />
        <President />
        <VideoHome />
      </main>
    </div>
  );
}
