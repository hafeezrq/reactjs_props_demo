import React from 'react';

function CommentDetails(props) {
  return (
    <React.Fragment>
      <div className='comment'>
        <a href='/' className='avatar'>
          <img src={props.src} alt='Avatar' />
        </a>
        <div className='content'>
          <a href='/' className='author'>
            {props.author}
          </a>
          <div className='metadata'>
            <span className='date'>{props.time}</span>
          </div>
          <div className='text'>{props.comment}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CommentDetails;
