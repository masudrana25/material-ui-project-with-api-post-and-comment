import React from 'react';
import './Post.css'
import { Link } from 'react-router-dom';

const Post = (props) => {
  const { title, body, id } = props.postData;
  return (
    <div className='post'>
      
      <h2><span className='postTitle'>Post Title :</span> {title}</h2>
      <p> <span className='postBody'>Post Body :</span> {body}</p>
      <Link to={`/postDetails/${id}`}><button className='buttonStyle'>See more about ID: {id}</button></Link>
    </div>
  );
};

export default Post;