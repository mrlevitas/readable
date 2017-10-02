import React from 'react';

const Post = props => {

  return(
    <div>
      <h3>{props.data.title}</h3>
      <div>{props.data.body}</div>
    </div>
  )
}

export default Post;
