import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, []);
  console.log(posts);
  return (
    <div className='home'>
      {
        posts.map( postData => <Post postData={postData}></Post>)
      }
    </div>
  );
};

export default Home;