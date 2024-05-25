import { H1, H2, A } from "@/components/ui/typography";
import { sanityCmsClient } from "@/lib/sanity/client";
import { POSTS_QUERY } from "@/lib/sanity/queries";
import { POSTS_QUERYResult } from "@/lib/sanity/types";

export default async function Blog() {
  const posts = await sanityCmsClient.fetch<POSTS_QUERYResult>(POSTS_QUERY);
  return (
    <>
      <H1>Blog</H1>
      <div className="h-8" />
      <H2>Posts</H2>
      <div className="h-4" />
      {posts.map((post) => (
        <div key={post._id}>
          {new Date(post.publishedAt!).toLocaleDateString()}&nbsp;-&nbsp;
          <A href={`/blog/${post.slug!.current}`}>{post.title}</A>
        </div>
      ))}
    </>
  );
}
