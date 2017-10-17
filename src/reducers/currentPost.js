import {
  GET_POST_REQUEST,
  GET_POST_REQUEST_SUCCESS,
  GET_POST_REQUEST_FAILURE
} from '../actions/getPost';

import {
  EDIT_POST_REQUEST_SUCCESS,
} from '../actions/editPost';

import {
  DELETE_POST_REQUEST_SUCCESS
} from '../actions/deletePost'

let initialState = {
  post: {}
}

let setDeleteFlag = (post) => {
  post['deleted'] = true

  return post
}

const currentPost = (state = initialState, action) => {
  switch(action.type) {
    case GET_POST_REQUEST:
      return Object.assign({}, state, {
      });
    case GET_POST_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        post: action.post
      });
    case GET_POST_REQUEST_FAILURE:
      return Object.assign({}, state, {

      });
    case EDIT_POST_REQUEST_SUCCESS:
      let currEditPost = state.post.id == action.post.id ? action.post : state.post
      return Object.assign({}, state, {
        post: currEditPost
      });
    case DELETE_POST_REQUEST_SUCCESS:
      let deletedPost = state.post.id == action.postId ? setDeleteFlag(state.post) : state.post
      return Object.assign({}, state, {
        post: deletedPost
      });
    default:
      return state;
  }
}

export default currentPost;
