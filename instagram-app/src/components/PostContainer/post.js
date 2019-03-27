import React from 'react';
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostHeader from './Postheader';
import './Posts.css';
import PropTypes from 'prop-types';
import likesContainer from './Likes';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    }
  }
  addLike = () => {
    let likes = this.state.likes + 1;
    this.setState({likes});
  }
  render() {
    return (
      <div className="post-border">
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <div className="post-image-wrapper">
          <img
            alt="post thumbnail"
            className="post-image"
            src={this.props.post.imageUrl}
          />
        </div>
        <likesContainer
          addLike={this.addLike}
          likes={this.state.likes}
        />
        <CommentSection comments={this.props.post.comments} />
        
      </div>
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

