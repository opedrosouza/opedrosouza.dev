import Post, { PostMeta } from "../interfaces/Post";
import matter from "gray-matter";
import { join } from "path";
import fs from "fs";
import { toFormattedDate } from "./utils";

const postsDirectory = join(process.cwd(), "posts");

export function getPostBySlug(slug: string) {
  if (!slug) return null;

  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    date: data.date.toString() as string,
    meta: {
      title: data.title,
      category: data.category,
      category_color: data.category_color,
      excerpt: data.excerpt,
      author: data.author,
      author_avatar_url: data.author_avatar_url,
      languages: data.languages,
      date: toFormattedDate(data.date),
    } as PostMeta,
    content
  } as Post
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .sort((post1, post2) => (new Date(post1?.date as string) > new Date(post2?.date as string) ? -1 : 1));

  return posts;
}

export function getLastPosts(count: number) {
  return getAllPosts().slice(0, count);
}

export function getPostsByCategory(category: string, count = 10) {
  if (!category) return null;

  return getAllPosts().filter(post => post?.meta.category == category).slice(0, count);
}
