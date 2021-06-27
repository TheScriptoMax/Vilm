import React, {useState} from 'react';
import {Link} from "react-router-dom";


const SearchBar = ({onSearch}) => {
    const [inputValue,setInputValue]= useState('')
    return (
        <form onSubmit={(e)=> e.preventDefault()} >
            <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input>
            <Link to='/search'><button type="submit" onClick={()=>onSearch(inputValue)}><i className="fas fa-search"></i></button></Link>
        </form>
    );
};

export default SearchBar;