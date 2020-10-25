import React, {useState} from 'react';
import "../css/SearchPage.css";
import {MdSearch} from 'react-icons/md';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {setSearch} from '../features/searchSlice';

function SearchPage() {
    const [searchInput,setSearchInput] = useState("");

    const history = useHistory();
    const dispatch = useDispatch(setSearch({
        search:searchInput,
    }))

    const handleSearch = () => {
        if(searchInput.length>0){
            dispatch(setSearch({
                search: searchInput,
            }))
            history.push("search");
        }
    }

    return (
        <div className="searchPage">
            <h1 className="searchPage__title">NEWS SEARCH</h1>
            <div className="searchPage__inputContainer">
                <MdSearch className="searchPage__icon" onClick={handleSearch}/>
                <input type="text" value={searchInput} onChange={(e)=>{setSearchInput(e.target.value)}}/>
            </div>
        </div>
    )
}

export default SearchPage
