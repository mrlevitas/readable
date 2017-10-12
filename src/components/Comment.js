import React from 'react';
import CommentVoteButton from './CommentVoteButton'

const Comment = props => {

  return(
    <div>
      <p>{props.data.body}</p>
      <div>by: {props.data.author} at {Date(props.data.timestamp)}</div>
      <div><strong>Votes: {props.data.voteScore}</strong></div>
      <CommentVoteButton commentId={props.data.id} arrow="up"/>
      <CommentVoteButton commentId={props.data.id} arrow="down"/>
    </div>
  )
}

export default Comment;
