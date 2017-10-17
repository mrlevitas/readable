import React from 'react';
import { connect } from 'react-redux';
import { getPost } from '../actions/getPost'
import { getComments } from '../actions/getComments';
import { addComment } from '../actions/addComment'
import Post from '../components/Post'
import EditPostForm from '../components/EditPostForm'
import Comment from '../components/Comment'
import CommentForm from '../components/CommentForm'
import CommentList from '../components/CommentList'
import onClickOutside from 'react-onclickoutside'
import FourOhFour from '../components/FourOhFour'
import { selectPost, deselectPost } from '../actions/selectPost'
import { editPost } from '../actions/editPost'
import { deletePost } from '../actions/deletePost'
import { Link} from 'react-router-dom'

const postStyle = {
  'padding-left': 50,
}

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
    this.handleSubmitPost = this.handleSubmitPost.bind(this);
  }

  componentDidMount(){
    this.props.getPost(this.props.match.params.id)
    this.props.getComments(this.props.match.params.id);
  }

  handleSubmitComment(newComment){
    this.props.addComment(newComment, this.props.currentPost.id)
  }

  handleSubmitPost(newPost){
    this.props.editPost(newPost);
  }

  handleClickOutside = event => {
    if(this.props.selectedPostId !== null){
      this.props.deselectPost();
    }
  }

  render(){
    if (this.props.currentPost.deleted === undefined || this.props.currentPost.deleted === true) {
      return(<FourOhFour/>)
    }

    let nonDeletedComments = this.props.comments.filter( p => { return p.deleted === false});
    let innerPostHtml =
      this.props.currentPost.id === this.props.selectedPostId ?
        (
          <div>
            <EditPostForm initialValues={this.props.currentPost} onSubmit={this.handleSubmitPost}/>
          </div>)
        :
        ( <div>
            <Post data={this.props.currentPost}/>
            <div style={postStyle}>
              <button onClick={() => this.props.selectPost(this.props.currentPost)}>Edit</button>
              <Link to="/posts" onClick={() => this.props.deletePost(this.props.currentPost.id)}>Delete</Link>
            </div>
          </div>)

    return(
      <div>
        {innerPostHtml}
        <div>
          <CommentList comments={nonDeletedComments}/>
          <div className="form-wrapper">
            <h2>Add a Comment!</h2>
            <CommentForm onSubmit={this.handleSubmitComment}/>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    selectedPostId: state.selectedPost.id,
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
    selectPost: (selectedPost) => dispatch(selectPost(selectedPost)),
    deselectPost: () => dispatch(deselectPost()),
    editPost: (post) => dispatch(editPost(post)),
    deletePost: (postId) => dispatch(deletePost(postId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(PostShow))
