import React, { useEffect, useState } from 'react';
import './Comments.css'
import { useParams } from 'react-router-dom';
import CommentsDetails from '../CommentsDetails/CommentsDetails';

const Comments = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(res => res.json())
      .then(data => setComments(data))
  }, []);

  return (
    <div className='comments'>
      <h1>Comments</h1>
      {
        comments.map( data => <CommentsDetails comments ={data}></CommentsDetails>)
      }

    </div>
  );
};

export default Comments;