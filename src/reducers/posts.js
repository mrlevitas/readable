import {
  GET_POSTS_REQUEST,
  GET_POSTS_REQUEST_SUCCESS,
  GET_POSTS_REQUEST_FAILURE,
  GET_POST_COMMENT_COUNT_REQUEST,
  GET_POST_COMMENT_COUNT_REQUEST_SUCCESS,
  GET_POST_COMMENT_COUNT_REQUEST_FAILURE
} from '../actions/postsIndex';

import {
  POST_VOTE_UP,
  POST_VOTE_DOWN
} from '../actions/votePost';

const initialPostState = {
  retrievedPosts: []
}

let updateCommentCount = (array, id, count) => {
  let newArray = array.slice();
  let position = array.findIndex((element) => {
    return element.id === id;
  })
  let newElement = Object.assign({}, array[position], {
    commentCount: count
  })

  newArray.splice(position,1,newElement)

  return newArray
}

let updatePostVote = (array, id, arrow) => {
  let newArray = array.slice();
  let position = array.findIndex((element) => {
    return element.id === id;
  })

  let newElement = null;
  switch(arrow) {
    case "up":
      newElement = Object.assign({}, array[position], {
        voteScore: array[position]['voteScore'] + 1,
      });
      break
    case "down":
      newElement = Object.assign({}, array[position], {
        voteScore: array[position]['voteScore'] - 1
      });
      break
    default:
      newElement = array[position]
  }

  newArray.splice(position,1,newElement)

  return newArray
}

function post (state = initialPostState, action) {
  const { title, body, author, category } = action

  switch (action.type) {
    case GET_POSTS_REQUEST:
      return Object.assign({}, state, {

      });
    case GET_POSTS_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        retrievedPosts: action.posts,
      });
    case GET_POSTS_REQUEST_FAILURE:
      return Object.assign({}, state, {
      });
    case GET_POST_COMMENT_COUNT_REQUEST:
      return Object.assign({}, state, {

      });
    case GET_POST_COMMENT_COUNT_REQUEST_SUCCESS:
      let countUpdatedPosts = updateCommentCount(state.retrievedPosts, action.postId, action.count)
      return Object.assign({}, state, {
        retrievedPosts: countUpdatedPosts
      });
    case GET_POST_COMMENT_COUNT_REQUEST_FAILURE:
      return Object.assign({}, state, {
      });
    case POST_VOTE_UP:
      let incrementedPostsVote = updatePostVote(state.retrievedPosts, action.postId, "up");
      return Object.assign({}, state, {
        retrievedPosts: incrementedPostsVote
      });
    case POST_VOTE_DOWN:
      let decrementedPostsVote = updatePostVote(state.retrievedPosts, action.postId, "down");
      return Object.assign({}, state, {
        retrievedPosts: decrementedPostsVote
      });
    default :
      return state
  }
}

export default post
