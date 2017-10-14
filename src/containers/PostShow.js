import React from 'react';
import { connect } from 'react-redux';
import { getPost } from '../actions/getPost'
import { getComments } from '../actions/getComments';
import { addComment } from '../actions/addComment'
import Post from '../components/Post'
import Comment from '../components/Comment'
import CommentForm from '../components/CommentForm'
import CommentList from '../components/CommentList'

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.getPost(this.props.match.params.id)
    this.props.getComments(this.props.match.params.id);
  }

  handleSubmit(newComment){
    this.props.addComment(newComment, this.props.currentPost.id)
  }

  render(){
    let nonDeletedComments = this.props.comments.filter( p => { return p.deleted === false})
    return(
      <div>
        <Post data={this.props.currentPost} />
        <div>
          <CommentList comments={nonDeletedComments}/>
          <div className="form-wrapper">
            <h2>Add a Comment!</h2>
            <CommentForm onSubmit={this.handleSubmit}/>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    currentPost: state.currentPost.post,
    selectedCommentId: state.selectedComment.id,
    comments: state.comment.comments
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getPost: (postId) => dispatch(getPost(postId)),
    getComments: (post) => dispatch(getComments(post)),
    addComment: (newComment, postId) => dispatch(addComment(newComment, postId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShow)
