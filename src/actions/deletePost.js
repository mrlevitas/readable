import * as API from '../utils/api'

export const DELETE_POST_REQUEST = "DELETE_POST_REQUEST";
export const DELETE_POST_REQUEST_SUCCESS = "DELETE_POST_REQUEST_SUCCESS";
export const DELETE_POST_REQUEST_FAILURE = "DELETE_POST_REQUEST_FAILURE";

let deletePostRequest = () => {
  return {
    type: DELETE_POST_REQUEST
  };
};

let deletePostRequestSuccess = data => {
  return {
    type: DELETE_POST_REQUEST_SUCCESS,
    postId: data
  };
};

let deletePostRequestFailure = () => {
  return {
    type: DELETE_POST_REQUEST_FAILURE
  };
};

let deletePost = (postId) => dispatch => {
  dispatch(deletePostRequest())
  API.deletePost(postId)
    .then((response) => dispatch(deletePostRequestSuccess(postId)))
    .catch(() => dispatch(deletePostRequestFailure()))
};

export { deletePost };
