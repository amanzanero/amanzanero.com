import { H1, A } from "@/components/ui/typography";
import { sanityCmsClient } from "@/lib/sanity/client";
import { POSTS_QUERY } from "@/lib/sanity/queries";
import { POSTS_QUERYResult } from "@/lib/sanity/types";
import { formattedDate } from "@/lib/utils";

export default async function Blog() {
  const posts = await sanityCmsClient.fetch<POSTS_QUERYResult>(POSTS_QUERY);
  return (
    <>
      <H1>Blog</H1>
      <div className="h-8" />
      {posts.map((post, i) => {
        return (
          <div key={post._id}>
            {i + 1}.&nbsp;
            <A href={`/blog/${post.slug!.current}`}>{post.title}</A>
            &nbsp;({formattedDate(post.publishedAt!)})
          </div>
        );
      })}
    </>
  );
}
