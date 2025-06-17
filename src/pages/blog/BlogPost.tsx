/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";

import Container from "../../component/defaults/Container";
import Footer from "../../component/defaults/Footer";
import Header from "../../component/defaults/Header";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "../../component/svgs/Logos";
import { Avatar } from "../../component/svgs/Icons";
import { client } from "../../sanity/client";

const portableComponents = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-[20px] lg:text-[24px] font-semibold mt-6">
        {children}
      </h2>
    ),
    normal: ({ children }: any) => (
      <p className="lg:text-[20px] text-[#333] mt-4">{children}</p>
    ),
  },
  types: {
    image: ({ value }: any) =>
      value?.asset?.url && (
        <img
          src={value.asset.url}
          alt=""
          className="my-10 lg:h-[462px] h-[296px] rounded-2xl w-full object-cover"
        />
      ),
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const query = `*[_type == "post" && slug.current == "${slug}"][0]{
        _id,
        title,
        publishedAt,
        slug,
        authorName,
        image{
          asset->{
            url
          }
        },
        tags,
        body
      }`;
      const data = await client.fetch(query);
      setPost(data);
    };

    fetchPost();
  }, [slug]);

  if (!post) return <p className="text-center mt-10">Loading...</p>;

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <Container>
      <div className="bg-[#f2f2f2] min-h-screen pt-10">
        <Header active="Blog" />
        <div className="w-[90vw] lg:w-[50vw] mx-auto mt-10 pb-10">
          <div className="space-y-4">
            <div className="flex">
              {post.tags.map((tag: string, index: number) => (
                <p
                  key={index}
                  className="bg-[#4b6bfb] text-[#fff] text-[14px] py-1 px-3 rounded-lg mr-2"
                >
                  {tag}
                </p>
              ))}
            </div>
            <h2 className="lg:text-[36px] text-[18px] text-[#333] font-semibold">
              {post.title}
            </h2>
            <div className="flex space-x-10 items-center text-[#808080] text-[14px]">
              <div className="flex items-center space-x-3">
                <Avatar />
                <span className="text-[#333]">{post.authorName}</span>
              </div>
              <p>{formattedDate}</p>
            </div>
          </div>
          {post.image?.asset?.url && (
            <img
              src={post.image.asset.url}
              alt="blog-img"
              className="my-10 lg:h-[462px] h-[296px] rounded-2xl w-[100%] object-cover"
            />
          )}
          <div className="space-y-6 mt-10">
            {post.body?.map((section: any) => (
              <div key={section._key} className="space-y-3">
                {section.heading && (
                  <h2 className="lg:text-[24px] text-[20px] font-semibold">
                    {section.heading}
                  </h2>
                )}
                {Array.isArray(section.content) ? (
                  <PortableText
                    value={section.content}
                    components={portableComponents}
                  />
                ) : (
                  <p className="lg:text-[20px] text-[#333]">
                    {section.content}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-3 mt-10">
            <h2 className="lg:text-[20px]">Share this post</h2>
            <div className="flex space-x-4">
              <LinkedIn />
              <Twitter />
              <Facebook />
              <Instagram />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Container>
  );
};

export default BlogPost;
