import * as API from '../utils/api'

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_REQUEST_SUCCESS = "ADD_POST_REQUEST_SUCCESS";
export const ADD_POST_REQUEST_FAILURE = "ADD_POST_REQUEST_FAILURE";

let addPostRequest = () => {
  return {
    type: ADD_POST_REQUEST
  };
};

let addPostRequestSuccess = data => {
  return {
    type: ADD_POST_REQUEST_SUCCESS,
    post: data
  };
};

let addPostRequestFailure = () => {
  return {
    type: ADD_POST_REQUEST_FAILURE
  };
};

let addPost = (newPost) => dispatch => {
  dispatch(addPostRequest())
  API.pushPost(newPost)
    .then((response) => dispatch(addPostRequestSuccess(response)))
    .catch(() => dispatch(addPostRequestFailure()))
};

export { addPost };
