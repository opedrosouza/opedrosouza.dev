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
        <div className="mr-20">
          <h1 className="text-post-title font-bold">Pedro Souza</h1>
          <h2 className="text-2xl font-thin">Engenheiro de Software</h2>
          <p className="text-lg font-thin text-gray-300">Apenas um programador compartilhando um pouco das loucuras do dia a dia.</p>
        </div>
        <div className="hidden lg:block">
          <Image
            src="/images/pedro.png"
            alt="Pedro Souza"
            width={150}
            height={150}
            className="rounded-full grayscale"
          />
        </div>
      </div>
      <section className="my-10">
        <h2 className="text-4xl font-bold">Últimos posts</h2>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-4 my-5">
          {posts.map((post: Post) => (
            <Link href={`posts/${post.slug}`} key={post.slug} className="block h-full hover:no-underline hover:scale-105 transition-all ease-linear">
              <PostCard post={post}/>
            </Link>
          ))}
        </div>
        <Link href="/posts" className="inline-flex flex-row items-center text-xl">
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
      posts: getLastPosts(3)
    }
  }
}

export default Home
