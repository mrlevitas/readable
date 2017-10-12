import * as API from '../utils/api'

import { deselectPost } from './selectPost'
export const EDIT_POST_REQUEST = "EDIT_POST_REQUEST";
export const EDIT_POST_REQUEST_SUCCESS = "EDIT_POST_REQUEST_SUCCESS";
export const EDIT_POST_REQUEST_FAILURE = "EDIT_POST_REQUEST_FAILURE";

let editPostRequest = () => {
  return {
    type: EDIT_POST_REQUEST
  };
};

let editPostRequestSuccess = data => {
  return {
    type: EDIT_POST_REQUEST_SUCCESS,
    post: data
  };
};

let editPostRequestFailure = () => {
  return {
    type: EDIT_POST_REQUEST_FAILURE
  };
};

let editPost = (newPost) => dispatch => {
  dispatch(editPostRequest())
  API.putPost(newPost)
    .then((response) => {
      dispatch(editPostRequestSuccess(newPost))
      Promise.resolve()
      .then(() => dispatch(deselectPost()))
    })
    .catch(() => dispatch(editPostRequestFailure()))
};

export { editPost };
