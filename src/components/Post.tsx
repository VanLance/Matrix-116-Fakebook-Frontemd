interface Postable {
  id: string;
  author: string;
  timestamp: Date;
  body: string;
}

interface PostProps {
  key: string;
  post: Postable;
}

export default function Post(props: PostProps) {
  return (
    <>
      <h3>Post</h3>
      <p>{props.post.author}</p>
      <p>{props.post.body}</p>
      <p>{props.post.timestamp.toLocaleString()}</p>
    </>
  );
}
