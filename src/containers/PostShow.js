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
    this.props.getComments(this.props.currentPost);
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

function mapStateToProps (state) {
  return {
    currentPost: state.currentPost.data,
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
