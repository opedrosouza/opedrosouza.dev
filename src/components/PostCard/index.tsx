import Post from '../../interfaces/Post';

interface PostCardProps {
  post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="relative border rounded shadow border-gray-100 p-5 lg:h-full">
      <span className={`mb-4 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-${post.meta.category_color}`}>{post.meta.category}</span>
      <h1 className="text-2xl">{post.meta.title}</h1>
    </div>
  )
}

export default PostCard;
