import * as API from '../utils/api'

export const DELETE_COMMENT_REQUEST = "DELETE_COMMENT_REQUEST";
export const DELETE_COMMENT_REQUEST_SUCCESS = "DELETE_COMMENT_REQUEST_SUCCESS";
export const DELETE_COMMENT_REQUEST_FAILURE = "DELETE_COMMENT_REQUEST_FAILURE";

let deleteCommentRequest = () => {
  return {
    type: DELETE_COMMENT_REQUEST
  };
};

let deleteCommentRequestSuccess = data => {
  return {
    type: DELETE_COMMENT_REQUEST_SUCCESS,
    commentId: data
  };
};

let deleteCommentRequestFailure = () => {
  return {
    type: DELETE_COMMENT_REQUEST_FAILURE
  };
};

let deleteComment = (commentId) => dispatch => {
  dispatch(deleteCommentRequest())
  API.deleteComment(commentId)
    .then((response) => dispatch(deleteCommentRequestSuccess(commentId)))
    .catch(() => dispatch(deleteCommentRequestFailure()))
};

export { deleteComment };
