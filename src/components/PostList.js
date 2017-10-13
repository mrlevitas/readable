import React from 'react'
import Post from './Post'
import { Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { getPost } from '../actions/getPost';
import sortBy from 'lodash/sortBy';

import EditPostForm from './EditPostForm';
import { selectPost, deselectPost } from '../actions/selectPost';
import { editPost } from '../actions/editPost';
import { deletePost } from '../actions/deletePost'

import onClickOutside from 'react-onclickoutside';

const postStyle = {
  'padding-left': 50,
}

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderedPosts: [],
      order: "asc"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleSort = this.toggleSort.bind(this);
  }

  handleClickOutside = event => {
    if(this.props.selectedPost !== null){
      this.props.deselectPost();
    }
  }

  handleSubmit(newPost){
    this.props.editPost(newPost);
  }

  // componentDidMount() {
  //   this.setState((state) => ({ orderedPosts: sortBy(this.props.posts, 'voteScore') }))
  // }

  componentWillReceiveProps(nextProps){
    this.setState({orderedPosts: sortBy(nextProps.posts, 'voteScore').reverse()});
  }

  toggleSort = (e) => {
    this.setState((prevState) => {
      switch(prevState.order) {
        case "asc":
          return {
            orderedPosts: sortBy(prevState.orderedPosts, 'voteScore'),
            order: "desc"
          };
        case "desc":
          return {
            orderedPosts: sortBy(prevState.orderedPosts, 'voteScore').reverse(),
            order: "asc"
          };
      }
    })
  }

  render(){
    let posts = this.state.orderedPosts
    let postMap = posts.map((item) => {
      if(item.id === this.props.selectedPost){
        return(
          <li key={item.id}>
            <EditPostForm key={item.id} initialValues={item} onSubmit={this.handleSubmit}/>
            <div style={postStyle}>
              <Link to={`/posts/${item.id}`}>View <strong>{item.commentCount}</strong> Comments</Link>
            </div>
          </li>
        )}
      return(
        <li key={item.id}>
          <Post data={item}/>
          <div style={postStyle}>
            <button onClick={() => this.props.selectPost(item)}>Edit</button>
            <button onClick={() => this.props.deletePost(item.id)}>Delete</button>
            <Link to={`/posts/${item.id}`}>View <strong>{item.commentCount}</strong> Comments</Link>
          </div>
        </li>
      )}
    )

    return (
      <div>
        <button
          className='sort-btn'
          onClick={this.toggleSort}>
          Switch Sorting
        </button>
        <ul className='post-list'>
          {postMap}
        </ul>
      </div>
    )}
}

let mapStateToProps = state => {
  return {
    selectedPost: state.selectedPost.id
  };
};

let mapDispatchToProps = dispatch => {
  return {
    getPost: (postId) => dispatch(getPost(postId)),
    selectPost: (selectedPost) => dispatch(selectPost(selectedPost)),
    deselectPost: () => dispatch(deselectPost()),
    editPost: (post) => dispatch(editPost(post)),
    deletePost: (postId) => dispatch(deletePost(postId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(PostList));
