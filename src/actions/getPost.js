import { push } from 'react-router-redux'
export const SET_POST = "SET_POST";

let setPost = (post) => {
  return {
    type: SET_POST,
    currentPost: post
  }
}

let getPost = (post) => dispatch => {
  dispatch(setPost(post))
  // dispatch(push(`/posts/${post.id}`))
};

export { getPost };
