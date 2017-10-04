import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postsIndex'
import PostList from '../components/PostList'
import sortBy from 'lodash/sortBy';

class CategoryShow extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.getPosts()
  }

  // handleSubmit(newPost){
  //   this.props.addPost(newPost);
  // }


  render(){
    let catPosts = this.props.posts.filter( p => {return p.category == this.props.category})

    return (
      <div>
        <h3>Category: {this.props.category}</h3>
        <PostList posts={sortBy(catPosts, 'voteScore').reverse()} />
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryShow)
