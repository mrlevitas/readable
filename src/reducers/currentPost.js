import {
  SET_POST,
} from '../actions/getPost';

let initialState = {
  data: null
}

const currentPost = (state = initialState, action) => {
  switch(action.type) {
    case SET_POST:
      return Object.assign({}, state, {
        data: action.currentPost
      });
    default:
      return state;
  }
}

export default currentPost;
