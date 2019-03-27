import React from 'react';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      commentText: ''
    };
  }
  
  addNewComment = event => {
   event.preventDefault();
    const newVariable = this.state.commentText;
    const newComment = {
      id: Date.now(),
      username: 'you',
      text: newVariable
    };
    this.setState({
      comments: [...this.state.comments, newComment],
      newVariable: ''
    })
  }

  

  updateList = event => {
    event.preventDefault();
    this.setState({commentText: event.target.value})
  }

  render() {
    return (
      <div>
        {this.state.comments.map(eachComment => (
          <div key={eachComment.id} className='comment'>
            <p>{eachComment.username} - {eachComment.text}</p>
          </div>
        ))}
        <p>{this.props.timestamp}</p>
      
        <CommentInput
          comment={this.state.Comment}
          updateList={this.updateList}
          addNewComment={this.addNewComment}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default CommentSection;