import React from 'react'
import PostsContainer from './PostContainer';
import dummyData from '../../dummy-data';


class PostPage extends React.Component {
    state = {
        posts: []
    };

    componentDidMount() {
        this.setState({ posts: dummyData})
    }

    render() {
        return (
            <PostsContainer posts={this.state.posts} />
        );
    }
}

  

export default PostPage
