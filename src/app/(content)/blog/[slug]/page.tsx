import { H1, P } from "@/components/ui/typography";
import { sanityCmsClient } from "@/lib/sanity/client";
import { BLOG_POST_QUERY, SLUGS_QUERY } from "@/lib/sanity/queries";
import { BLOG_POST_QUERYResult, SLUGS_QUERYResult } from "@/lib/sanity/types";
import { formattedDate } from "@/lib/utils";
import { BlockBody } from "./blogBody";

export default async function Blog({ params }: { params: { slug: string } }) {
  const blogPost = await sanityCmsClient.fetch<BLOG_POST_QUERYResult>(
    BLOG_POST_QUERY,
    { slug: params.slug },
  );
  return (
    <>
      <H1>{blogPost?.title}</H1>
      <P>
        Published on: <strong>{formattedDate(blogPost?.publishedAt!)}</strong>
      </P>
      <BlockBody blocks={blogPost?.body} />
    </>
  );
}

export async function generateStaticParams() {
  const slugs = await sanityCmsClient.fetch<SLUGS_QUERYResult>(SLUGS_QUERY);

  return slugs.map((slug) => ({
    slug: slug.slug,
  }));
}
