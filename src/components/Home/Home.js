import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Home.css'

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, []);
  return (
    <div className='home'>
      <h1 className='bbbbb'>Welcome to Himu Facebook App</h1>
      <h3 className='bbbbb'>Let's See Our Post Below</h3>
      {
        posts.map( postData => <Post postData={postData}></Post>)
      }
    </div>
  );
};

export default Home;