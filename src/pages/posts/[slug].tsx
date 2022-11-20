import { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import SiteHead from "../../components/SiteHead";
import Post from "../../interfaces/Post";
import { getAllPosts, getPostBySlug } from "../../lib/api";

interface PostWithPostsProps {
  post: Post;
}

const PostPage: NextPage<PostWithPostsProps> = ({ post }) => {
  return (
    <div className="content mt-10">
      <SiteHead pageTitle={post.meta.title}/>
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

export default PostPage;
