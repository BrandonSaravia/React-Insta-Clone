import React from 'react';
import styled, {css} from 'styled-components'

const Postheader = styled.div`
  display: flex;
`;

const PostThumbWrapper = styled.div`
  height: 50px;
  width: 50px;
`;

const PostThumb = styled.img`
  height: 100%;
  border-radius: 50%;
`;

const PostHeader = props => {
  return (
    <Postheader>
      <PostThumbWrapper>
        <PostThumb
          alt="post header"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </PostThumbWrapper>
      <div>{props.username}</div>
    </Postheader>
  );
};

export default PostHeader;
