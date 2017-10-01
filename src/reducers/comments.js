import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_REQUEST_SUCCESS,
  GET_COMMENTS_REQUEST_FAILURE
} from '../actions/getComments';

// import {
//   ADD_COMMENT_REQUEST,
//   ADD_COMMENT_REQUEST_SUCCESS,
//   ADD_COMMENT_REQUEST_FAILURE
// } from '../actions/addComment';
//
// import {
//   DELETE_COMMENT_REQUEST,
//   DELETE_COMMENT_REQUEST_SUCCESS,
//   DELETE_COMMENT_REQUEST_FAILURE
// } from '../actions/deleteComment';
//
// import {
//   EDIT_COMMENT_REQUEST,
//   EDIT_COMMENT_REQUEST_SUCCESS,
//   EDIT_COMMENT_REQUEST_FAILURE
// } from '../actions/editComment';

let initialState = {
  comments: [],
}

const comment = (state = initialState, action) => {
  switch(action.type) {
    case GET_COMMENTS_REQUEST:
      return Object.assign({}, state, {
        // isFetching: true
      });
    case GET_COMMENTS_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        comments: action.comments,
        // isFetching: false
      });
    case GET_COMMENTS_REQUEST_FAILURE:
      return Object.assign({}, state, {
      });
    // case ADD_COMMENT_REQUEST:
    //   return Object.assign({}, state, {
    //     isFetching: true
    //   });
    // case ADD_COMMENT_REQUEST_SUCCESS:
    //   return Object.assign({}, state, {
    //     retrievedComments: state.retrievedComments.concat(action.comments),
    //     isFetching: false
    //   });
    // case ADD_COMMENT_REQUEST_FAILURE:
    //   return Object.assign({}, state, {
    //     isFetching: false
    //   });
    // case DELETE_COMMENT_REQUEST:
    //   return Object.assign({}, state, {
    //     isFetching: true
    //   });
    // case DELETE_COMMENT_REQUEST_SUCCESS:
    //   let newComments = deleteFromArray(state.retrievedComments,action.commentId)
    //   return Object.assign({}, state, {
    //     retrievedComments: newComments,
    //     isFetching: false
    //   });
    // case DELETE_COMMENT_REQUEST_FAILURE:
    //   return Object.assign({}, state, {
    //     isFetching: false
    //   });
    // case EDIT_COMMENT_REQUEST:
    //   return Object.assign({}, state, {
    //     isFetching: true
    //   });
    // case EDIT_COMMENT_REQUEST_SUCCESS:
    //   let editedComments = editFromArray(state.retrievedComments,action.comments)
    //   return Object.assign({}, state, {
    //     retrievedComments: editedComments,
    //     isFetching: false
    //   });
    // case EDIT_COMMENT_REQUEST_FAILURE:
    //   return Object.assign({}, state, {
    //     isFetching: false
    //   });
    default:
      return state;
  }
}

export default comment;
