import React from 'react'
import PostsContainer from './PostContainer';
import dummyData from '../../dummy-data';
import SearchBar from '../../../src/components/SearchBar/search';


class PostPage extends React.Component {
    state = {
        posts: [],
        filteredPostsText: ''
    };

    componentDidMount() {
        this.setState({ posts: dummyData})
    }

    fetchPosts =e => {
        e.preventDefault();
        fetch(this.state.filteredPostsText)
        .then(post =>
            this.setState({
                posts: post
            })
        )
    }

    handleChanges = e => {
        this.setState({ filteredPostsText: e.target.value });
    };
    
    

    logOut = event => {
        const user = this.state.userTyped;
        localStorage.removeItem('user', user);
        window.location.reload();
    };

    render() {
        return (
            <div>
                <SearchBar
                    searchPosts={this.searchPostsHandler}
                />
                <PostsContainer posts={this.state.posts}/>
                <button onClick={this.logOut}>sign out</button>
            </div>
        );
    }
}

  

export default PostPage
