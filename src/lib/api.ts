import Post, { PostMeta } from "../interfaces/Post";
import matter from "gray-matter";
import { join } from "path";
import fs from "fs";

import { format } from "date-fns";
import { pt } from "date-fns/locale";

const postsDirectory = join(process.cwd(), "posts");

export function getPostBySlug(slug: string) {
  if (!slug) return null;

  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const date = format(new Date(), "dd MMM yyyy", { locale: pt });

  return {
    slug: realSlug,
    date: data.date.toString() as string,
    meta: {
      title: data.title,
      category: data.category,
      excerpt: data.excerpt,
      author: data.author,
      author_avatar_url: data.author_avatar_url,
      date
    } as PostMeta,
    content
  } as Post
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .sort((post1, post2) => ((post1?.date as string) > (post2?.date as string) ? -1 : 1));

  return posts;
}

export function getLastPosts(count: number) {
  return getAllPosts().slice(0, count);
}
