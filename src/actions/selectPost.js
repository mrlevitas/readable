export const SELECT_POST = "SELECT_POST";
export const DESELECT_POST = "DESELECT_POST";

let selectPostAction = data => {
  return {
    type: SELECT_POST,
    selectedPostId: data.id
  };
};

let deselectPostAction = () => {
  return {
    type: DESELECT_POST,
  };
};

let selectPost = (selectedPost) => dispatch => {
  dispatch(deselectPostAction())
  Promise.resolve()
  .then(() => dispatch(selectPostAction(selectedPost)))
};

let deselectPost = () => dispatch => {
  dispatch(deselectPostAction())
};

export { selectPost, deselectPost };
