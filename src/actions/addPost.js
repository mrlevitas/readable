import * as API from '../utils/api'
import uniqueid from 'lodash/uniqueId'

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
    newPost: data
  };
};

let addPostRequestFailure = () => {
  return {
    type: ADD_POST_REQUEST_FAILURE
  };
};

let addPost = (newPost) => dispatch => {
  let fullPost = Object.assign({}, newPost, {
    timestamp: Date.now(),
    id: uniqueid(),
    voteScore: 1,
    deleted: false,
    commentCount: 0,
  });

  dispatch(addPostRequest())
  API.pushPost(fullPost)
    .then((response) => dispatch(addPostRequestSuccess(fullPost)))
    .catch(() => dispatch(addPostRequestFailure()))
};

export { addPost };
