import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './PostDetails.css';
import Comments from '../Comments/Comments';

const PostDetails = () => {
  const { id } = useParams();

// Sob data k abar load korey "id" er sathy miliye dekhano jai
  
//  const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(res => res.json())
//       .then(data => setPosts(data))
//   }, []);
//   const matchPost = posts.filter(data => parseInt(data?.id) === parseInt(id));

//just "id" ta diye data API diye call koreo dekhano jai
  
  const [singlePost, setSinglePost] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setSinglePost(data))
  }, []);
  return (
    <>
      <h1 className='aaaaa'>This is Post Details Section of id {id}</h1>
    <div className='postDetails'>
        <h1> Post</h1>
      {/*
      Puro data load er khetry
      <h2> Title : {matchPost[0]?.title}</h2>
      <p> Body : {matchPost[0]?.body}</p>
       */}

      {/* single data load er khetry */}
      <h2> <span className='postTitle'> Post Title :</span> {singlePost?.title}</h2>
      <p> <span className='postBody'> Post Body : </span>{singlePost?.body}</p>      
      </div>
      
      <div>
        <Comments></Comments>
      </div>
    </>
  );
};

export default PostDetails;