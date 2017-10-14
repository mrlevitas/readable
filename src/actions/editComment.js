import * as API from '../utils/api'

import { deselectComment } from './selectComment'
export const EDIT_COMMENT_REQUEST = "EDIT_COMMENT_REQUEST";
export const EDIT_COMMENT_REQUEST_SUCCESS = "EDIT_COMMENT_REQUEST_SUCCESS";
export const EDIT_COMMENT_REQUEST_FAILURE = "EDIT_COMMENT_REQUEST_FAILURE";

let editCommentRequest = () => {
  return {
    type: EDIT_COMMENT_REQUEST
  };
};

let editCommentRequestSuccess = data => {
  return {
    type: EDIT_COMMENT_REQUEST_SUCCESS,
    comment: data
  };
};

let editCommentRequestFailure = () => {
  return {
    type: EDIT_COMMENT_REQUEST_FAILURE
  };
};

let editComment = (newComment) => dispatch => {
  let editedComment = Object.assign({}, newComment, {
    timestamp: Date.now(),
  });

  dispatch(editCommentRequest())
  API.putComment(editedComment)
    .then((response) => {
      dispatch(editCommentRequestSuccess(editedComment))
      Promise.resolve()
      .then(() => dispatch(deselectComment()))
    })
    .catch(() => dispatch(editCommentRequestFailure()))
};

export { editComment };
