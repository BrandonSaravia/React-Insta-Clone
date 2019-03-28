import React from 'react';
import Post from './Post';
import styled, {css} from 'styled-components'



const PostsContainerDiv = styled.div`
  height: 500px;
  width: 50%;
  margin: 5px auto;
`;

const PostsContainer = props => {
  return (
    <PostsContainerDiv>
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </PostsContainerDiv>
  );
};

export default PostsContainer;