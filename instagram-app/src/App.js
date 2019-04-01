import React, { Component } from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage';
import withAuthenticate from "./components/authentication/withAuthenticate";
import Login from "./components/Login/Login"

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(Login);


class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  };

  // searchPostsHandler = e => {
  //   const posts = this.state.posts.filter(p => {
  //     if (p.username.includes(e.target.value)) {
  //       return p;
  //     }
  //   });
  //   this.setState({ filteredPosts: posts });
  // };

  render() {
    return (
      
      <div className="App">
        
        {/* <SearchBar 
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostsHandler}
        /> */}
        
      
        <ComponentFromWithAuthenticate />
        
        
      </div>
    );
  }
}

export default App;