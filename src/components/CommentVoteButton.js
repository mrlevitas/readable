import React          from 'react';
// import { Button }     from 'react-bootstrap';
import { connect }    from 'react-redux';
import { adjustCommentVote } from '../actions/voteComment';

class CommentVoteButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.adjustCommentVote(this.props.commentId, this.props.arrow)
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
    adjustCommentVote: (commentId, arrow) => dispatch(adjustCommentVote(commentId, arrow))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentVoteButton);
