export const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  image,
  tags,
  authorName,
  body
}`;

export const getPostBySlugQuery = (slug: string) => `
  *[_type == "post" && slug.current == "${slug}"][0]{
    _id,
    title,
    publishedAt,
    slug,
    authorName,
    image{
      asset->{
        _id,
        url
      }
    },
    tags,
    body
  }
`;
