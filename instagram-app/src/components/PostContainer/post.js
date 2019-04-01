import React from 'react';
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostHeader from './Postheader';
import PropTypes from 'prop-types';
import LikesContainer from './Likes';
import styled, {css} from 'styled-components'


const PostBorder = styled.div`
  border: 1px solid #d3d3d3;
  margin: 5px 0;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const PostImageWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const PostImage = styled.img`
  width: 100%;
`;

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes,
      id: false
    }
  }

  addLike = () => {
    let likes = this.state.likes + 1;
    if (this.state.id === true){
      likes = this.state.likes - 1
    }
    this.setState({ likes, id: !this.state.id });
  }

  render() {
    return (
      <PostBorder>
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <PostImageWrapper>
          <PostImage
            alt="post thumbnail"
            src={this.props.post.imageUrl}
          />
        </PostImageWrapper>
        <LikesContainer
          addLike={this.addLike}
          likes={this.state.likes}
        />
        <CommentSection comments={this.props.post.comments} />
        
      </PostBorder>
    )
  }


}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

// const Post = props => {
//   return (
//     <div className="post-border">
//       <PostHeader
//         username={props.post.username}
//         thumbnailUrl={props.post.thumbnailUrl}
//       />
//       <div className="post-image-wrapper">
//         <img
//           alt="post thumbnail"
//           className="post-image"
//           src={props.post.imageUrl}
//         />
//       </div>
//       <i class="far fa-heart"></i>
//       <i class="far fa-comment"></i>
//       <p>{props.post.likes}</p>
//       <CommentSection comments={props.post.comments} />
//     </div>
//   );
// };

export default Post;

