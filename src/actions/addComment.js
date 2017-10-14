import * as API from '../utils/api'
import uniqueid from 'lodash/uniqueId'

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_REQUEST_SUCCESS = "ADD_COMMENT_REQUEST_SUCCESS";
export const ADD_COMMENT_REQUEST_FAILURE = "ADD_COMMENT_REQUEST_FAILURE";

let addCommentRequest = () => {
  return {
    type: ADD_COMMENT_REQUEST
  };
};

let addCommentRequestSuccess = data => {
  return {
    type: ADD_COMMENT_REQUEST_SUCCESS,
    newComment: data
  };
};

let addCommentRequestFailure = data => {
  return {
    type: ADD_COMMENT_REQUEST_FAILURE,
    data: data
  };
};

let addComment = (newComment, postId) => dispatch => {
  let fullComment = Object.assign({}, newComment, {
    timestamp: Date.now(),
    id: uniqueid('comment_'),
    voteScore: 1,
    deleted: false,
    parentDeleted: false,
    parentId: postId
  });

  dispatch(addCommentRequest())
  API.pushComment(fullComment)
    .then((response) => dispatch(addCommentRequestSuccess(fullComment)))
    .catch((response) => dispatch(addCommentRequestFailure(response)))
};

export { addComment };
