import React from 'react';
import VoteButton from './VoteButton'

const Post = props => {

  return(
    <div>
      <h3>{props.data.title}</h3>
      <div>{props.data.body}</div>
      <div><strong>Votes: {props.data.voteScore}</strong></div>
      <VoteButton postId={props.data.id} arrow="up"/>
      <VoteButton postId={props.data.id} arrow="down"/>
    </div>
  )
}

export default Post;
