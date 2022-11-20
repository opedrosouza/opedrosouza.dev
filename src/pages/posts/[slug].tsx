import { NextPage } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Post from "../../interfaces/Post";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import { timeToRead } from "../../lib/utils";

interface PostWithPostsProps {
  post: Post;
}

const Post: NextPage<PostWithPostsProps> = ({ post }) => {
  return (
    <div className="content mt-10">
      <div>
        <h1 className="text-3xl font-bold">{post.meta.title}</h1>
      </div>
      <div className="mt-10">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  )
}

export async function getStaticProps({ params }: any) {

  return {
    props: {
      post: getPostBySlug(params.slug)
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  const paths = posts.map(({ slug }: any) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}

export default Post
