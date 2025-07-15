import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";

import Image from "next/image";
import Hero from "../components/Hero";
import HomeServices from "../components/homeServices";
import President from "@/components/President";
import VideoHome from "@/components/VideoHome";
import Phl from '@/components/Phl';

gsap.registerPlugin(ScrollTrigger, SplitText);


export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <HomeServices />
        <President />
        <Phl />
        <VideoHome />
      </main>
    </div>
  );
}
