import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/posts'
import PostList from './PostList'

class App extends Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  state = {
    posts: [],
  }

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, getPosts } = this.props

    return (
      <div>
        <div>
          {posts !== null && (
                    <PostList
                      posts={posts}
                    />)}
        </div>
        <input
          type='text'
          ref={(input) => this.input = input}
          placeholder="Post here"
        />
        <button onClick={(post) => {
                                getPosts({ title: post, body:"post body", author: "bob", category: "react" })
                              }} >
        Submit</button>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
