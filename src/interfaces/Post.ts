export default interface Post {
  slug: string;
  date: string;
  meta: PostMeta;
  content: string;
}

export interface PostMeta {
  title: string;
  date: string;
  category?: string;
  excerpt?: string;
  author: string;
  author_avatar_url?: string;
}
