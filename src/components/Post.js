import React from 'react';
import PostVoteButton from './PostVoteButton'

const postStyle = {
  'padding-left': 50,
}

const Post = props => {

  return(
    <div>
      <h3>{props.data.title}</h3>
      <div style={postStyle}>
        <div><strong>by:</strong> {props.data.author}</div>
        <div>{props.data.body}</div>
        <div><strong>Votes: {props.data.voteScore}</strong></div>
        <PostVoteButton postId={props.data.id} arrow="up"/>
        <PostVoteButton postId={props.data.id} arrow="down"/>
      </div>
    </div>
  )
}

export default Post;
