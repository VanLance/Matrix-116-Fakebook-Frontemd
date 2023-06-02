import { useState, useEffect, useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Body from '../components/Body';
import Post from '../components/Post';
import { Postable } from '../components/Post';
import { AuthContext } from '../contexts/UserProvider';

const base_api_url = import.meta.env.VITE_APP_BASE_API

export default function PostsPage({endpoint,heading}:{endpoint:string,heading:string}) {
  console.log(base_api_url)
  const [postsArray, setPostsArray] = useState<Postable[]>([]);
  const { user } = useContext(AuthContext)

  useEffect(() => {
    {console.log(user.token)}
    (async () => {
      const res = await fetch(
        `${base_api_url}${endpoint}`,{
          method:'GET',
          headers:{
            'x-access-token':`Bearer ${user.token}`,
          }
        }
        
      );
      if (res.ok) {
        const data = await res.json();
        setPostsArray(data);
      } console.log(res)
    })();
  }, []);

  return (
    <>
      
      <Body makepost sidebar>
        {postsArray.length === 0 ? (
          <Spinner animation="border" />
        ) : (
          <>
          <h3>{ heading }</h3>
            {postsArray.map((post) => {
              return <Post post={post} key={post.id} />;
            })}
          </>
        )}
      </Body>
    </>
  );
}
