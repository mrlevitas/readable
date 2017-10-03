import React          from 'react';
// import { Button }     from 'react-bootstrap';
import { connect }    from 'react-redux';
import { adjustPostVote } from '../actions/votePost';

class VoteButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.adjustPostVote(this.props.postId, this.props.arrow)
  }

  render(){
    switch(this.props.arrow) {
      case "up":
        return( <button className="up" onClick={this.handleClick}>^</button> )
      case "down":
        return(<button className="down" onClick={this.handleClick}>V</button>)
    }
  }
}

let mapStateToProps = () => {
  return {};
};

let mapDispatchToProps = dispatch => {
  return {
    adjustPostVote: (postId, arrow) => dispatch(adjustPostVote(postId, arrow))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteButton);
