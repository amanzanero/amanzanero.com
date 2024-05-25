import { groq } from "next-sanity";

export const POSTS_QUERY = groq`
  *[_type == "post"] | order(publishedAt) {
    _id,
    slug,
    title,
    publishedAt
  }
`;
