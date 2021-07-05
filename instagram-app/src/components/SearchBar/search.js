import React from 'react';
import './search.css'
import instagramLogo from './img/instagramLogo.jpg'
import styled, {css} from 'styled-components'


const Searchbar = styled.div`
    display: flex;
    margin: 0 auto;
    margin-top: 42px;
    max-width: 1867px;
    justify-content: space-between;
`;

const Logo = styled.img`
    border-right: 2px solid black;
    width: 65px;
    height: 65px;
    padding-right: 11%;
`;

const LeftNav = styled.div`
    display: flex;
`;

const H1 = styled.h1`
    padding-left: 12%;
    font-size: 45px;
    margin-top: 7px;
`;

const InputSearch = styled.input`
    text-align: center;
    width: 425px;
    height: 50px;
    margin-top: 8px;
    border-radius: 8px;
    font-size: 29px;
`;

const LinkSymbols = styled.div`
    width: 19%;
    display: flex;
    justify-content: space-around;
`;

const SearchBar = props =>{
    return (
        <Searchbar>
            <LeftNav>
                <Logo src={instagramLogo} alt="instagram logo looks like poloroid camera" />
                <H1>Instagram</H1>
            </LeftNav>

            <InputSearch
                type="text"
                placeholder= '🔍Search'
                value = {props.filteredPostsText}
                onSubmit={props.fetchPosts}
                onChange={props.handleChanges}
            />

            <LinkSymbols>
                <i class="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user"></i>
            </LinkSymbols>
        </Searchbar>
    )
}


export default SearchBar