import React from 'react';
import { connect }        from 'react-redux';
import { getComments } from '../actions/getComments';
import Post from '../components/Post'
import Comment from '../components/Comment'

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    this.props.getComments(this.props.currentPostId);
  }

  render(){
    let post = this.props.postArray.find((post) => post.id === this.props.currentPostId)

    return(
      <div>
        <Post data={post} />
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
    postArray: state.post.retrievedPosts,
    currentPostId: state.currentPost.currentPostId,
    comments: state.comment.comments
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getComments: (post) => dispatch(getComments(post)),
    // createPost: (data) => dispatch(addPost(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShow)
