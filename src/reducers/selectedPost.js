import {
  SELECT_POST,
  DESELECT_POST
} from '../actions/selectPost';

let initialState = {
  id: null
}

const selectedPost = (state = initialState, action) => {
  switch(action.type) {
    case SELECT_POST:
      return Object.assign({}, state, {
        id: action.selectedPostId
      });
    case DESELECT_POST:
      return Object.assign({}, state, {
        id: null
      });
    default:
      return state;
  }
}

export default selectedPost;
