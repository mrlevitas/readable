import * as HELPER from '../utils/helpers'

import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_REQUEST_SUCCESS,
  GET_COMMENTS_REQUEST_FAILURE
} from '../actions/getComments';

import {
  COMMENT_VOTE_UP,
  COMMENT_VOTE_DOWN
} from '../actions/voteComment';

import {
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_REQUEST_SUCCESS,
  ADD_COMMENT_REQUEST_FAILURE
} from '../actions/addComment';

import {
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_REQUEST_SUCCESS,
  DELETE_COMMENT_REQUEST_FAILURE
} from '../actions/deleteComment';

import {
  EDIT_COMMENT_REQUEST,
  EDIT_COMMENT_REQUEST_SUCCESS,
  EDIT_COMMENT_REQUEST_FAILURE
} from '../actions/editComment';

let initialState = {
  comments: [],
}

let updateCommentVote = (array, id, arrow) => {
  let newArray = array.slice();
  let position = array.findIndex((element) => {
    return element.id === id;
  })

  let newElement = null;
  switch(arrow) {
    case "up":
      newElement = Object.assign({}, array[position], {
        voteScore: array[position]['voteScore'] + 1,
      });
      break
    case "down":
      newElement = Object.assign({}, array[position], {
        voteScore: array[position]['voteScore'] - 1
      });
      break
    default:
      newElement = array[position]
  }

  newArray.splice(position,1,newElement)

  return newArray
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
      });
    case GET_COMMENTS_REQUEST_FAILURE:
      return Object.assign({}, state, {
      });
    case ADD_COMMENT_REQUEST:
      return Object.assign({}, state, {
      });
    case ADD_COMMENT_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        comments: state.comments.concat(action.newComment),
      });
    case ADD_COMMENT_REQUEST_FAILURE:
      return Object.assign({}, state, {
      });
    case DELETE_COMMENT_REQUEST:
      return Object.assign({}, state, {
      });
    case DELETE_COMMENT_REQUEST_SUCCESS:
      let newComments = HELPER.deleteFromArray(state.comments,action.commentId)
      return Object.assign({}, state, {
        comments: newComments
      });
    case DELETE_COMMENT_REQUEST_FAILURE:
      return Object.assign({}, state, {
      });
    case EDIT_COMMENT_REQUEST:
      return state
    case EDIT_COMMENT_REQUEST_SUCCESS:
      let editedComments = HELPER.editFromArray(state.comments, action.comment)
      return Object.assign({}, state, {
        comments: editedComments,
      });
    case EDIT_COMMENT_REQUEST_FAILURE:
      return state
    case COMMENT_VOTE_UP:
      let incrementedCommentsVote = updateCommentVote(state.comments, action.commentId, "up");
      return Object.assign({}, state, {
        comments: incrementedCommentsVote
      });
    case COMMENT_VOTE_DOWN:
      let decrementedCommentsVote = updateCommentVote(state.comments, action.commentId, "down");
      return Object.assign({}, state, {
        comments: decrementedCommentsVote
      });
    default:
      return state;
  }
}

export default comment;
