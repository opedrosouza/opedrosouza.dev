import Post from '../../interfaces/Post';

interface PostCardProps {
  post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="border rounded shadow border-white p-5">
      <h1 className="text-2xl font-bold">{post.meta.title}</h1>
    </div>
  )
}

export default PostCard;
