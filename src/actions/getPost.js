import * as API from '../utils/api'

export const GET_POST_REQUEST = "GET_POST_REQUEST";
export const GET_POST_REQUEST_SUCCESS = "GET_POST_REQUEST_SUCCESS";
export const GET_POST_REQUEST_FAILURE = "GET_POST_REQUEST_FAILURE";

let getPostRequestSuccess = data => {
  return {
    type: GET_POST_REQUEST_SUCCESS,
    post: data
  };
};

let getPostRequestFailure = () => {
  return {
    type: GET_POST_REQUEST_FAILURE
  };
};

let getPostRequest = (postId) => {
  return {
    type: GET_POST_REQUEST,
  }
}

let getPost = (postId) => dispatch => {
  debugger
  dispatch(getPostRequest(postId))
  API.fetchPost(postId)
    .then((response) => {
      dispatch(getPostRequestSuccess(response))
    })
    .catch(() => dispatch(getPostRequestFailure()))
};

export { getPost };
