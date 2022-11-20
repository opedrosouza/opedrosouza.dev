import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import PostCard from "../components/PostCard";
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
      <section>
        <h2 className="text-2xl font-bold mt-10 mb-5">Últimos posts</h2>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-4">
          {posts.map((post: Post) => (
            <Link href={`posts/${post.slug}`} key={post.slug}>
              <PostCard post={post}/>
            </Link>
          ))}
        </div>
      </section>
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
