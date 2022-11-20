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
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h1 className="text-4xl font-bold">Pedro Souza</h1>
          <h2 className="text-2xl font-thin">Desenvolvedor Fullstack</h2>
          <p className="text-xl font-thin mt-3">Ajudo desenvolvedores a aprenderem a programar e solucionar problemas de forma divertida</p>
        </div>
        <div></div>
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
