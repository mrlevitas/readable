import * as API from '../utils/api'

export const GET_COMMENTS_REQUEST = "GET_COMMENTS_REQUEST";
export const GET_COMMENTS_REQUEST_SUCCESS = "GET_COMMENTS_REQUEST_SUCCESS";
export const GET_COMMENTS_REQUEST_FAILURE = "GET_COMMENTS_REQUEST_FAILURE";

let getCommentsRequest = () => {
  return {
    type: GET_COMMENTS_REQUEST
  };
};

let getCommentsRequestSuccess = data => {
  return {
    type: GET_COMMENTS_REQUEST_SUCCESS,
    comments: data
  };
};

let getCommentsRequestFailure = () => {
  return {
    type: GET_COMMENTS_REQUEST_FAILURE
  };
};

let getComments = (post) => dispatch => {
  dispatch(getCommentsRequest(post.id))
  API.fetchComments(post.id)
    .then((response) => {
      dispatch(getCommentsRequestSuccess(response))
    })
    .catch(() => dispatch(getCommentsRequestFailure()))
};

export { getComments };
