import React from 'react';
import './Post.css'
import { Link } from 'react-router-dom';

const Post = (props) => {
  const { title, body } = props.postData;
  return (
    <div className='post'>
      <h1>Title : {title}</h1>
      <p> Body : {body}</p>
      <Link to="/postDetails"><button>See more...</button></Link>
    </div>
  );
};

export default Post;