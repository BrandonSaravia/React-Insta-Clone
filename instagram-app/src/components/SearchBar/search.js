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
            <div className='searchBar'>
                <div className='leftNav'>
                    <img className='logo' src={instagramLogo} alt="instagram logo looks like poloroid camera" />
                    <h1>Instagram</h1>
                </div>

                <input 
                    className='inputSearch'
                    type="text"
                    name="item"
                    placeholder= 'Search'
                />

                <div className='linkSymbols'>
                    <i class="fal fa-compass"></i>
                    <i class="fal fa-heart"></i>
                    <i class="fal fa-user"></i>
                </div>
            </div>
        )
    }
}

export default SearchBar