// import {
//   ADD_POST,
// } from '../actions'

import {
  GET_POSTS_REQUEST,
  GET_POSTS_REQUEST_SUCCESS,
  GET_POSTS_REQUEST_FAILURE
} from '../actions/postsIndex';

const initialPostState = {
  retrievedPosts: []
}

function post (state = initialPostState, action) {
  const { title, body, author, category } = action

  switch (action.type) {
    case GET_POSTS_REQUEST:
      return Object.assign({}, state, {

      });
    case GET_POSTS_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        retrievedPosts: action.posts,
      });
    case GET_POSTS_REQUEST_FAILURE:
      return Object.assign({}, state, {
      });
    // case REMOVE_FROM_CALENDAR :
    //   return {
    //     ...state,
    //     [day]: {
    //       ...state[day],
    //       [meal]: null,
    //     }
    //   }
    default :
      return state
  }
}

export default post
