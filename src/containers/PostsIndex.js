import React              from 'react';
import { connect }        from 'react-redux';

import { getPosts } from '../actions/postsIndex'

import PostList from '../components/PostList'
// import PostForm          from '../components/PostForm';

class PostsIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this)
  }


  componentDidMount() {
    this.props.getPosts();
  }

  // handleSubmit(newPost){
  //   this.props.addPost(newPost);
  // }


  render(){
    return (
      <div>
        <PostList posts={this.props.posts} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    posts: state.post.retrievedPosts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getPosts: () => dispatch(getPosts()),
    // createPost: (data) => dispatch(addPost(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex)
