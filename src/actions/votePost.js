import * as API from '../utils/api'

export const POST_VOTE_UP = "POST_VOTE_UP";
export const POST_VOTE_DOWN = "POST_VOTE_DOWN";

let upVote = (postId) => {
  return {
    type: POST_VOTE_UP,
    postId: postId
  }
}

let downVote = (postId) => {
  return {
    type: POST_VOTE_DOWN,
    postId: postId
  }
}

let adjustPostVote = (postId, arrow) => dispatch => {
  switch(arrow) {
    case "up":
      dispatch(upVote(postId))
      API.pushPostVote(postId, "upVote")
      break
    case "down":
      dispatch(downVote(postId))
      API.pushPostVote(postId, "downVote")
      break
  }
};

export { adjustPostVote }
