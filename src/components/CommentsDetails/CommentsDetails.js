import React, { useState, useEffect } from 'react';
import './CommentsDetails.css'
import { useParams } from 'react-router-dom';

const CommentsDetails = (props) => {
  const comments = props.comments;
  // const { id } = useParams();
  // const [photos, setPhotos] = useState([]);
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
  //    .then(res => res.json())
  //    .then(data => setPhotos(data))
  // }, []);
  // const needPhoto = photos.slice(0, 5);
  // console.log(needPhoto[0].title);
  return (
    <>
      
      <div className='commentsDetails'>
        <h2> User Name : {comments?.name}</h2>
        <h4> User Email Adress : <span className='emailAdress'>{comments?.email}</span></h4>
        <p> <span className='commentBody'>Comment Body :</span> {comments?.body}</p>
      </div>
    </>
  );
};

export default CommentsDetails;