import * as API from '../utils/api'

export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST"
export const GET_POSTS_REQUEST_SUCCESS = "GET_POSTS_REQUEST_SUCCESS"
export const GET_POSTS_REQUEST_FAILURE = "GET_POSTS_REQUEST_FAILURE"
export const GET_POST_COMMENT_COUNT_REQUEST= "GET_POST_COMMENT_COUNT_REQUEST"
export const GET_POST_COMMENT_COUNT_REQUEST_SUCCESS = "GET_POST_COMMENT_COUNT_REQUEST_SUCCESS"
export const GET_POST_COMMENT_COUNT_REQUEST_FAILURE = "GET_POST_COMMENT_COUNT_REQUEST_FAILURE"

// export function addPost({ title, body, author, category }) {
//   return {
//     type: ADD_POST,
//     title,
//     body,
//     author,
//     category,
//   }
// }
let getPostCommentCountRequest = (postId) => {
  return {
    type: GET_POST_COMMENT_COUNT_REQUEST,
    postId: postId
  };
};

let getPostCommentCountRequestSuccess = (data, parentId) => {
  return {
    type: GET_POST_COMMENT_COUNT_REQUEST_SUCCESS,
    count: data.length,
    postId: parentId
  };
};

let getPostCommentCountRequestFailure = () => {
  return {
    type: GET_POST_COMMENT_COUNT_REQUEST_FAILURE
  };
};

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
    .then((response) => {
      dispatch(getPostsRequestSuccess(response))
      response.map( (item) => {
        dispatch(getPostCommentCountRequest(item.id))
        API.fetchComments(item.id)
          .then((res) => {
            dispatch(getPostCommentCountRequestSuccess(res, item.id))
          })
          .catch(() => dispatch(getPostCommentCountRequestFailure()))
      })
    })
    .catch(() => dispatch(getPostsRequestFailure()))
  // .catch((error) => console.log(error))
};

export { getPosts };
