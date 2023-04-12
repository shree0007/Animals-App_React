import React from 'react';
import './Search.css'

const Search = (props) => {
    return (
        <div className='search'>
            <input onChange={props.searchHandler} />
        </div>
    );
};

export default Search;