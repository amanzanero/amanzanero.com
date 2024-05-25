import { H1 } from "@/components/ui/typography";
import { sanityCmsClient } from "@/lib/sanity/client";
import { BLOG_POST_QUERY, SLUGS_QUERY } from "@/lib/sanity/queries";
import { BLOG_POST_QUERYResult, SLUGS_QUERYResult } from "@/lib/sanity/types";
import { BlockBody } from "./blogBody";
import { PublishedAt } from "./publishedAt";
import type { Metadata, ResolvingMetadata } from "next";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ImageComponent } from "./image";

type BlogProps = { params: { slug: string } };

export async function generateMetadata(
  { params: { slug } }: BlogProps,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const blogPost = await sanityCmsClient.fetch<BLOG_POST_QUERYResult>(
    BLOG_POST_QUERY,
    { slug },
  );

  return {
    title: `${blogPost?.title} - Andrew's Blog`,
  };
}

export default async function Blog({ params: { slug } }: BlogProps) {
  const blogPost = await sanityCmsClient.fetch<BLOG_POST_QUERYResult>(
    BLOG_POST_QUERY,
    { slug: slug },
  );
  return (
    <>
      <div className="h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{blogPost?.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="h-4 sm:h-8" />
      <H1>{blogPost?.title}</H1>
      <PublishedAt date={blogPost?.publishedAt!} />
      <ImageComponent value={blogPost?.mainImage as any} isInline={false} />
      <BlockBody blocks={blogPost?.body} />
      <div className="h-4 sm:h-8" />
    </>
  );
}

export async function generateStaticParams() {
  const slugs = await sanityCmsClient.fetch<SLUGS_QUERYResult>(SLUGS_QUERY);

  return slugs.map((slug) => ({
    slug: slug.slug,
  }));
}
