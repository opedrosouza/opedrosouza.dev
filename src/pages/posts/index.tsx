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

export default Posts
