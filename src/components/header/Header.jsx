import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import './header.css'
import {Link} from "react-router-dom";

const Header = ({onSearch}) => {
    return (
        <div className='header'>
            <div className='container wrap'>
                <Link to="/" style={{ textDecoration: 'none' }}><h1>Vilm</h1></Link>
                <SearchBar onSearch={(inputValue)=>onSearch(inputValue)}/>

            </div>
        </div>
    );
};

export default Header;