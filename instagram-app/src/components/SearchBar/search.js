import React from 'react';
import './search.css'
import instagramLogo from './img/instagramLogo.jpg'

class SearchBar extends React.Component {
    constructor() {
      super();
      this.state = {
        text: ""
      };
    }
    render() {
        return (
            <div class='searchBar'>
                <div class='leftNav'>
                    <img class='logo' src={instagramLogo} alt="instagram logo looks like poloroid camera" />
                    <h1>Instagram</h1>
                </div>

                <input 
                    className='inputSearch'
                    type="text"
                    name="item"
                    placeholder= '🔍Search'
                    onKeyDown={this.props.searchPosts}
                />

                <div class='linkSymbols'>
                    <i class="far fa-compass"></i>
                    <i class="far fa-heart"></i>
                    <i class="far fa-user"></i>
                </div>
            </div>
        )
    }
}

export default SearchBar