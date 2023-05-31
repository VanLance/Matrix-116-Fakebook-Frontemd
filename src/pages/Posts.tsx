import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Body from '../components/Body';
import Post from '../components/Post';
import { Postable } from '../components/Post';

const base_api_url = import.meta.env.VITE_APP_BASE_API

export default function Posts() {
  console.log(base_api_url)
  const [postsArray, setPostsArray] = useState<Postable[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${base_api_url}/posts`
      );
      if (res.ok) {
        const data = await res.json();
        setPostsArray(data);
      }
    })();
  }, []);

  return (
    <>
      
      <Body sidebar>
        {postsArray.length === 0 ? (
          <Spinner animation="border" />
        ) : (
          <>
          <h3>Posts</h3>
            {postsArray.map((post) => {
              return <Post post={post} key={post.id} />;
            })}
          </>
        )}
      </Body>
    </>
  );
}
