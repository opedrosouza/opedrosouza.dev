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
    <div className="content mt-6 lg:mt-10">
      <div className="flex flex-row items-center justify-between">
        <div className="">
          <h1 className="text-post-title font-bold">Pedro Souza</h1>
          <h2 className="text-2xl font-thin">Engenheiro de Software Fullstack</h2>
          <p className="text-xl font-thin mt-3">Ajudo desenvolvedores a aprenderem a programar e solucionar problemas de forma divertida</p>
        </div>
        <div className="hidden lg:block lg:place-self-end">
          <Image
            src="/images/pedro.png"
            alt="Pedro Souza"
            width={150}
            height={150}
            className="rounded-full lg:ml-20"
          />
        </div>
      </div>
      <section>
        <h2 className="text-3xl font-bold mt-10 mb-5">Últimos posts</h2>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-4 justify-items-stretch place-content-stretch">
          {posts.map((post: Post) => (
            <Link href={`posts/${post.slug}`} key={post.slug} className="block">
              <PostCard post={post}/>
            </Link>
          ))}
        </div>
        <Link href="/posts" className="inline-flex flex-row items-center mt-4 text-lg">
          Ver todos os posts
          <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
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
