import React, { useState } from 'react';
import "../css/Navbar.css";
import {MdSearch} from 'react-icons/md';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {setSearch} from '../features/searchSlice';

function Navbar({search}) {

    const [searchInput,setSearchInput] = useState(search);
    const dispatch = useDispatch(setSearch({
        search:searchInput,
    }))

    const handleSearch = () => {
        if(searchInput.length>0){
            dispatch(setSearch({
                search: searchInput,
            }))}
    }

    return (
        <div className="navbar">
            <p className="navbar__title">
                <Link to="/" style={{testDecoration:"none"}}>
                NEWS SEARCH
                </Link>
            </p>
            <div className="navbar__searchContainer">
                <input type="text" value={searchInput} onChange={(e)=>{setSearchInput(e.target.value)}}/>
                <MdSearch className="navbar__searchIcon" onClick={handleSearch}/>
            </div>
        </div>
    )
}

export default Navbar
