import React from 'react';
import { connect } from 'react-redux';
import { getPost } from '../actions/getPost'
import { getComments } from '../actions/getComments';
import Post from '../components/Post'
import Comment from '../components/Comment'

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    this.props.getPost(this.props.match.params.id)
    this.props.getComments(this.props.match.params.id);
  }

  render(){

    return(
      <div>
        <Post data={this.props.currentPost} />
        <ul className='comment-list'>
          {this.props.comments.map((item) => (
            <li key={item.id}>
              <Comment data={item}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    currentPost: state.currentPost.post,
    comments: state.comment.comments
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getPost: (postId) => dispatch(getPost(postId)),
    getComments: (post) => dispatch(getComments(post)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShow)
