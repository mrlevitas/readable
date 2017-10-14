import {
  SELECT_COMMENT,
  DESELECT_COMMENT
} from '../actions/selectComment';

let initialState = {
  id: null
}

const selectedComment = (state = initialState, action) => {
  switch(action.type) {
    case SELECT_COMMENT:
      return Object.assign({}, state, {
        id: action.selectedCommentId
      });
    case DESELECT_COMMENT:
      return Object.assign({}, state, {
        id: null
      });
    default:
      return state;
  }
}

export default selectedComment;
