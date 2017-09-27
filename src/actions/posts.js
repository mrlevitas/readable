import * as API from '../utils/api'

export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
export const GET_POSTS_REQUEST_SUCCESS = "GET_POSTS_REQUEST_SUCCESS";
export const GET_POSTS_REQUEST_FAILURE = "GET_POSTS_REQUEST_FAILURE";
// export const ADD_POST = 'ADD_POST'

// export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

// export function addPost({ title, body, author, category }) {
//   return {
//     type: ADD_POST,
//     title,
//     body,
//     author,
//     category,
//   }
// }

let getPostsRequest = () => {
  return {
    type: GET_POSTS_REQUEST
  };
};

let getPostsRequestSuccess = data => {
  return {
    type: GET_POSTS_REQUEST_SUCCESS,
    posts: data
  };
};

let getPostsRequestFailure = () => {
  return {
    type: GET_POSTS_REQUEST_FAILURE
  };
};


let getPosts = () => dispatch => {
  dispatch(getPostsRequest())
  API.fetchPosts()
  .then((response) => dispatch(getPostsRequestSuccess(response)))
  .catch(() => dispatch(getPostsRequestFailure()))
  .catch((error) => console.log(error))
};

export { getPosts };
