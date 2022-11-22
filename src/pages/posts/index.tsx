import { NextPage } from "next";
import Link from "next/link";
import Post from "../../interfaces/Post";
import { getAllPosts } from "../../lib/api";
import { timeToRead } from "../../lib/utils";

interface PostsWithPostsProps {
  posts: Post[];
}

const Posts: NextPage<PostsWithPostsProps> = ({ posts }) => {
  return (
    <div className="content mt-10">
      <ul className="mt-10">
        {posts.map((post: Post) => (
          <li key={post.slug} className="mb-4 pb-5 border-b border-gray-100 last:border-none">
            <Link href={`posts/${post.slug}`} className="hover:no-underline hover:text-gray-300">
              <div>
                <div className="grid grid-cols-4 mb-2">
                  <h2 className="text-2xl font-bold mr-5 col-span-3">{post.meta.title}</h2>
                  <span className="text-right">{timeToRead(post.content)}</span>
                </div>
                <p className="text-lg">{post.meta.excerpt}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
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

export default Posts
