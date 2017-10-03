import {
  SET_POST,
} from '../actions/getPost';

let initialState = {
  currentPostId: ""
}

const currentPost = (state = initialState, action) => {
  switch(action.type) {
    case SET_POST:
      return Object.assign({}, state, {
        currentPostId: action.currentPostId
      });
    default:
      return state;
  }
}

export default currentPost;
