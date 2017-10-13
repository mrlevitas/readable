import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postsIndex'
import { addPost }    from '../actions/addPost';
import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import sortBy from 'lodash/sortBy'

class PostsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  componentDidMount() {
    this.props.getPosts()
  }

  handleSubmit(newPost){
    this.props.addPost(newPost)
  }

  render(){
    let sortedNonDeletedPosts = sortBy(this.props.posts, 'voteScore').reverse().filter( p => { return p.deleted === false})
    return (
      <div>
        <PostList posts={sortedNonDeletedPosts} />
        <div className="post-form-wrapper">
          <h2>Write a Post!</h2>
          <PostForm onSubmit={this.handleSubmit} />
        </div>
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
    addPost: (newPost) => dispatch(addPost(newPost)),
    getPosts: () => dispatch(getPosts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex)
