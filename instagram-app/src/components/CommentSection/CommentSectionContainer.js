import React from 'react';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';
import styled, {css} from 'styled-components'


const CommentDiv = styled.div`
  font-weight: 300;
  font-size: 14px;
`;

const CommentContainerDiv = styled.div`
  text-align: left;
  padding: 2px;
  margin-left: 4px;
`;

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
      <CommentContainerDiv>
        {this.state.comments.map(eachComment => (
          <CommentDiv key={eachComment.id}>
            <p>{eachComment.username} - {eachComment.text}</p>
          </CommentDiv>
        ))}
        <p>{this.props.timestamp}</p>
      
        <CommentInput
          comment={this.state.Comment}
          updateList={this.updateList}
          addNewComment={this.addNewComment}
        />
      </CommentContainerDiv>
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