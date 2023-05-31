import Body from '../components/Body';
import Post from '../components/Post';

export default function Posts() {
  const postsArray = [
    { id: '1', author: 'sean', body: 'This is post 1', timestamp: new Date() },
    { id: '2', author: 'sean', body: 'This is post 2', timestamp: new Date() },
  ];
  return (
    <Body>
      {postsArray.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
    </Body>
  );
}
