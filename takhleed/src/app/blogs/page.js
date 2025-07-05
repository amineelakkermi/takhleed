import Image from "next/image";
import BlogsHero from "@/components/blogsHero";
import LatestBlogs from "@/components/LatestBlogs";



export default function Blogs() {
  return (
    <div>
      <main>
      <BlogsHero />
       <LatestBlogs />
      </main>
    </div>
  );
}
