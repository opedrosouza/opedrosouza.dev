import { NextPage } from "next";
import Link from "next/link";
import Post from "../interfaces/Post";
import { getAllPosts } from "../lib/api";
import { timeToRead } from "../lib/utils";

interface HomeWithPostsProps {
  posts: Post[];
}

const Home: NextPage<HomeWithPostsProps> = ({ posts }) => {
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
        {posts.map((post: Post) => (
          <li key={post.slug}>
            <Link href={`posts/${post.slug}`}>
              {post.meta.title} | {post.meta.category} - {post.meta.date} - {timeToRead(post.content)}
            </Link>
          </li>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts()
    }
  }
}

export default Home
