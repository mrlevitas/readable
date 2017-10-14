import React from 'react'
import Comment from './Comment'
import { Link} from 'react-router-dom'
import { connect } from 'react-redux'
import sortBy from 'lodash/sortBy';

import EditCommentForm from './EditCommentForm';
import { selectComment, deselectComment } from '../actions/selectComment';
import { editComment } from '../actions/editComment';
import { deleteComment } from '../actions/deleteComment'

import onClickOutside from 'react-onclickoutside';

const commentStyle = {
  'padding-left': 50,
}

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderedComments: [],
      order: "asc"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleSort = this.toggleSort.bind(this);
  }

  handleClickOutside = event => {
    if(this.props.selectedCommentId !== null){
      this.props.deselectComment();
    }
  }

  handleSubmit(newComment){
    this.props.editComment(newComment);
  }

  componentWillReceiveProps(nextProps){
    this.setState({orderedComments: sortBy(nextProps.comments, 'voteScore').reverse()});
  }

  toggleSort = (e) => {
    this.setState((prevState) => {
      switch(prevState.order) {
        case "asc":
          return {
            orderedComments: sortBy(prevState.orderedComments, 'voteScore'),
            order: "desc"
          };
        case "desc":
          return {
            orderedComments: sortBy(prevState.orderedComments, 'voteScore').reverse(),
            order: "asc"
          };
      }
    })
  }

  render(){
    let comments = this.state.orderedComments;
    let commentMap = comments.map((item) => {
        if(item.id === this.props.selectedComment){
          return(
            <li key={item.id}>
              <EditCommentForm key={item.id} initialValues={item} onSubmit={this.handleSubmit}/>
            </li>
          )
        }
        return(
          <li key={item.id}>
            <Comment data={item}/>
            <button onClick={() => this.props.selectComment(item)}>Edit</button>
            <button onClick={() => this.props.deleteComment(item.id)}>Delete</button>
          </li>
        )
      })

    return (
      <div>
        <button
          className='sort-btn'
          onClick={this.toggleSort}>
          Switch Sorting
        </button>
        <ul className='comment-list'>
          {commentMap}
        </ul>
      </div>
    )}
}

let mapStateToProps = state => {
  return {
    selectedCommentId: state.selectedComment.id
  };
};

let mapDispatchToProps = dispatch => {
  return {
    selectComment: (selectedComment) => dispatch(selectComment(selectedComment)),
    deselectComment: () => dispatch(deselectComment()),
    editComment: (comment) => dispatch(editComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(CommentList));
