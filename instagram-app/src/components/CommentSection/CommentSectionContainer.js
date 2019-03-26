import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }
  
  addNewComment = (event, index) => {
    event.preventDefault();
    
    // const newComment = {
    //   comments: this.state.comments,
    //   index: this.state.id
    // }
    // this.setState({
    //   comments: [...this.state.comments, newComment]
    // })
  }
  
  handlechanges = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  updateList = event => {
    event.preventDefault();
    const newComment = {
      comments: this.state.comments
    }
    this.setState({
      comments: [...this.state.comments, newComment]
    })
  }
// console.log(comments);
  render() {
    return (
      <div>
        
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <CommentInput 
          comment={this.state.Comment}
          handleChanges={this.handleChanges}
          updateList={this.updateList}
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

export default CommentSection;