import { groq } from "next-sanity";

export const POSTS_QUERY = groq`
  *[_type == "post"] | order(dateTime(publishedAt) desc)  {
    _id,
    slug,
    title,
    publishedAt
  }
`;

export const SLUGS_QUERY = groq`
  *[_type == "post"] {
    "slug": slug.current
  }
`;

export const BLOG_POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    mainImage,
    publishedAt,
    excerpt,
    body
  }
`;
