import {
  GET_POST_REQUEST,
  GET_POST_REQUEST_SUCCESS,
  GET_POST_REQUEST_FAILURE
} from '../actions/getPost';

let initialState = {
  post: ""
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
    default:
      return state;
  }
}

export default currentPost;
