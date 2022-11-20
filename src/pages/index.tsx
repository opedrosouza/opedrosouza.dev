import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Post from "../interfaces/Post";
import { getLastPosts } from "../lib/api";

interface HomeWithPostsProps {
  posts: Post[];
}

const Home: NextPage<HomeWithPostsProps> = ({ posts }) => {
  return (
    <div className="content mt-10">
      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        <div>
          <h1 className="text-4xl font-bold">Pedro Souza</h1>
          <h2 className="text-2xl font-thin">Desenvolvedor Fullstack</h2>
          <p className="text-xl font-thin mt-3">Ajudo desenvolvedores a aprenderem a programar e solucionar problemas de forma divertida</p>
        </div>
        <div className="hidden lg:place-self-end">
          <Image
            src="/images/pedro.png"
            alt="Pedro Souza"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
      </div>

      <div className="mt-10">
        {posts.map((post: Post) => (
          <li key={post.slug}>
            <Link href={`posts/${post.slug}`}>
              {post.meta.title} | {post.meta.category} - {post.meta.date}
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
      posts: getLastPosts(10)
    }
  }
}

export default Home
