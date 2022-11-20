import { NextPage } from "next";
import SiteHead from "../../components/SiteHead";
import Post from "../../interfaces/Post";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import 'prismjs/themes/prism-okaidia.css';
import { parseMarkdown } from "../../lib/markdown";

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
      <article className="mt-10" dangerouslySetInnerHTML={{ __html: post.content}}></article>
    </div>
  )
}

export async function getStaticProps({ params }: any) {
  const post = getPostBySlug(params.slug)
  const content = await parseMarkdown(post?.content || '')

  return {
    props: {
      post: { ...post, content }
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
