import React from 'react';
import "../css/SearchPage.css";
import {MdSearch} from 'react-icons/md';

function SearchPage() {
    return (
        <div className="searchPage">
            <h1 className="searchPage__title">NEWS SEARCH</h1>
            <div className="searchPage__inputContainer">
                <MdSearch className="searchPage__icon"/>
                <input type="text"/>
            </div>
        </div>
    )
}

export default SearchPage
