import React from 'react'
import Post from './Post'
import { Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { getPost } from '../actions/getPost';
import sortBy from 'lodash/sortBy';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderedPosts: [],
      order: "asc"
    };
    this.toggleSort = this.toggleSort.bind(this);
  }

  // componentDidMount() {
  //   this.setState((state) => ({ orderedPosts: sortBy(this.props.posts, 'voteScore') }))
  // }

  componentWillReceiveProps(nextProps){
    this.setState({orderedPosts: nextProps.posts});
  }

  toggleSort = (e) => {
    this.setState((prevState) => {
      switch(prevState.order) {
        case "asc":
          return {
            orderedPosts: sortBy(prevState.orderedPosts, 'voteScore').reverse(),
            order: "desc"
          };
        case "desc":
          return {
            orderedPosts: sortBy(prevState.orderedPosts, 'voteScore'),
            order: "asc"
          };
      }
    })
  }

  render(){
    return (
      <div>
        <button
          className='sort-btn'
          onClick={this.toggleSort}>
          Switch Sorting
        </button>
        <ul className='post-list'>
          {this.state.orderedPosts.map((item) => (
            <li key={item.id}>
              <Post data={item} />
              <Link to={`/posts/${item.id}`} onClick={() => this.props.getPost(item.id) }>View <strong>{item.commentCount}</strong> Comments</Link>
            </li>
          ))}
        </ul>
      </div>
    )}
}

let mapStateToProps = () => {
  return {};
};

let mapDispatchToProps = dispatch => {
  return {
    getPost: (postId) => dispatch(getPost(postId)),
    // createPost: (data) => dispatch(addPost(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
