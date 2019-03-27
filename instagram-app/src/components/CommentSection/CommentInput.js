import React from 'react';

const CommentInput = props => {
  return (
    <form onSubmit={props.addNewComment}>
      
      <input 
        type="text"
        value={props.commentText}
        placeholder="Add comment... "
        name='name'
        onChange={props.updateList}
        
      />
    </form>
  );
};

export default CommentInput;