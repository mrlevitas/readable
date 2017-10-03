import * as API from '../utils/api'

export const COMMENT_VOTE_UP = "COMMENT_VOTE_UP";
export const COMMENT_VOTE_DOWN = "COMMENT_VOTE_DOWN";

let upVote = (commentId) => {
  return {
    type: COMMENT_VOTE_UP,
    commentId: commentId
  }
}

let downVote = (commentId) => {
  return {
    type: COMMENT_VOTE_DOWN,
    commentId: commentId
  }
}

let adjustCommentVote = (commentId, arrow) => dispatch => {
  switch(arrow) {
    case "up":
      dispatch(upVote(commentId))
      API.pushCommentVote(commentId, "upVote")
      break
    case "down":
      dispatch(downVote(commentId))
      API.pushCommentVote(commentId, "downVote")
      break
  }
};

export { adjustCommentVote }
