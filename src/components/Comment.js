import React from 'react';

const Comment = props => {

  return(
    <div>
      <p>{props.data.body}</p>
      <div>by: {props.data.author} at {Date(props.data.timestamp)}</div>
    </div>
  )
}

export default Comment;
