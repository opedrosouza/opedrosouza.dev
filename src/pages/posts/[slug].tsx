import { NextPage } from "next";
import Image from "next/image";
import SiteHead from "../../components/SiteHead";
import Post from "../../interfaces/Post";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import 'prismjs/themes/prism-okaidia.css';
import { parseMarkdown } from "../../lib/markdown";
import styles from "./post.module.css";
import { timeToRead } from "../../lib/utils";

interface PostWithPostsProps {
  post: Post;
}

const PostPage: NextPage<PostWithPostsProps> = ({ post }) => {
  return (
    <>
      {/* <NextSeo
        title={`${post.frontmatter.title} - Willian Justen`}
        description={post.frontmatter.description}
        openGraph={{
          url: `https://willianjusten.com.br/${post.slug}`,
          title: `${post.frontmatter.title} - Willian Justen`,
          description: post.frontmatter.description,
          images: [
            {
              url: `https://og-image-service.willianjusten.com.br/${encodeURIComponent(post.frontmatter.title)}.png`,
              alt: `${post.frontmatter.title}`
            }
          ]
        }}
      /> */}
      <SiteHead pageTitle={post.meta.title}/>
      <div className={`${styles.post} content my-10`}>
        <div className={styles.header}>
          <h1>{post.meta.title}</h1>
          <h2>{post.meta.excerpt}</h2>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between my-6 text-gray-400 space-y-4">
            <div className="flex items-center">
              <Image src={post.meta.author_avatar_url as string} alt={post.meta.author} width={30} height={30} className="rounded-full" />
              <h3 className="ml-2">{post.meta.author}</h3>
              <span className="mx-2"> - </span>
              <span>{new Date(post.date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric'})}</span>
            </div>
            <div>
              <span>{timeToRead(post.content)}</span>
            </div>
          </div>
        </div>
        <article className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }}></article>
      </div>
    </>
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
