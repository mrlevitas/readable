// import {
//   ADD_POST,
// } from '../actions'

import {
  GET_POSTS_REQUEST,
  GET_POSTS_REQUEST_SUCCESS,
  GET_POSTS_REQUEST_FAILURE,
  GET_POST_COMMENT_COUNT_REQUEST,
  GET_POST_COMMENT_COUNT_REQUEST_SUCCESS,
  GET_POST_COMMENT_COUNT_REQUEST_FAILURE
} from '../actions/postsIndex';

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
    default :
      return state
  }
}

export default post
