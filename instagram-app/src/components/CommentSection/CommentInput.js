import React from 'react';

const CommentInput = props => {
  return (
    <form>
      <input 
        type="text"
        value={props.name}
        placeholder="Add comment... "
        name='name'
        onChange={props.handleChanges}
        onSubmit={props.addNewComment}
      />
    </form>
  );
};

export default CommentInput;