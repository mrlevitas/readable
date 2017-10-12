export const SET_POST = "SET_POST";

let setPost = (postId) => {
  return {
    type: SET_POST,
    currentPostId: postId
  }
}

let getPost = (postId) => dispatch => {
  dispatch(setPost(postId))
};

export { getPost };
