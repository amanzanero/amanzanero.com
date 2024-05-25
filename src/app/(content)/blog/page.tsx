import { H1, A } from "@/components/ui/typography";
import { sanityCmsClient } from "@/lib/sanity/client";
import { POSTS_QUERY } from "@/lib/sanity/queries";
import { POSTS_QUERYResult } from "@/lib/sanity/types";
import { PostedOn } from "./postedOn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Andrew Manzanero",
  description: "A list of my blog posts.",
};

export default async function Blog() {
  const posts = await sanityCmsClient.fetch<POSTS_QUERYResult>(POSTS_QUERY);
  return (
    <>
      <div className="h-4 sm:h-8" />
      <H1>Blog</H1>
      <div className="h-8" />
      {posts.map((post, i) => {
        return (
          <div key={post._id}>
            {i + 1}.&nbsp;
            <PostedOn date={post.publishedAt!} /> -&nbsp;
            <A href={`/blog/${post.slug!.current}`}>{post.title}</A>
          </div>
        );
      })}
    </>
  );
}
