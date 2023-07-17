import { GetStaticPropsContext } from "next";
import { FC } from "react";
import { getDocumentBySlug } from "outstatic/server";
import { MDXRemote } from "next-mdx-remote/rsc";
import isEmpty from "@/utils/isEmpty";
import Link from "next/link";

const SlugNotFound: FC = () => <div>Post not found</div>;

const PostSlug: FC<GetStaticPropsContext> = async ({ params }) => {
  if (!params?.slug) return <SlugNotFound />;

  const post = getDocumentBySlug("posts", params.slug.toString(), [
    "title",
    "slug",
    "coverImage",
    "author",
    "content",
  ]);

  if (isEmpty(post)) return <SlugNotFound />;
  console.log(post.content);
  return (
    <main className="w-full max-w-2xl p-4 mx-auto">
      <div className="text-charcoal-200 text-xs">
        <p>
          /{" "}
          <Link className="hover:cursor-pointer hover:underline" href="/posts">
            posts
          </Link>{" "}
          / <span className="font-bold">{post.slug}</span>
        </p>
      </div>

      <h1 className="title">{post.title}</h1>
      <MDXRemote source={post.content} />
    </main>
  );
};

export default PostSlug;
