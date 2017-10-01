import React from 'react'
import Post from './Post'
import { Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { getPost } from '../actions/getPost';

class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <ul className='post-list'>
        {this.props.posts.map((item) => (
          <li key={item.id}>
            <Post key={item.id} data={item} />
            <Link to={`/posts/${item.id}`} onClick={() => this.props.getPost(item) }>View Comments</Link>
          </li>
        ))}
      </ul>
    )}
}

let mapStateToProps = () => {
  return {};
};

let mapDispatchToProps = dispatch => {
  return {
    getPost: (post) => dispatch(getPost(post)),
    // createPost: (data) => dispatch(addPost(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
