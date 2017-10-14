export const SELECT_COMMENT = "SELECT_COMMENT";
export const DESELECT_COMMENT = "DESELECT_COMMENT";

let selectCommentAction = data => {
  return {
    type: SELECT_COMMENT,
    selectedCommentId: data.id
  };
};

let deselectCommentAction = () => {
  return {
    type: DESELECT_COMMENT,
  };
};

let selectComment = (selectedComment) => dispatch => {
  dispatch(deselectCommentAction())
  Promise.resolve()
  .then(() => dispatch(selectCommentAction(selectedComment)))
};

let deselectComment = () => dispatch => {
  dispatch(deselectCommentAction())
};

export { selectComment, deselectComment };
