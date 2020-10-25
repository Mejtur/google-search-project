import React, {useEffect,useState} from 'react'
import Navbar from '../components/Navbar';
import {useSelector} from 'react-redux';
import {selectSearch} from '../features/searchSlice';
import SingleSearch from '../components/SingleSearch';

function Results() {

    const [data,setData] = useState([]);
    const search = useSelector(selectSearch);
    const apiKey = "06255b46d2c74fc286d8e87b99aebe0f";
    const page = 1;
    const url = `https://newsapi.org/v2/everything?q=${search}&pageSize=5&page=${page}&apiKey=${apiKey}`;

    useEffect(()=>{
        fetch(url).then((response)=>response.json()).then((data)=>setData(data.articles));
    }, [url])

    console.log(data);

    return (
        <div>
            <Navbar />
            <div className="searchComponents__container">
                {data.map((search,id)=>(
                    <SingleSearch key={id} image={search.urlToImage} title={search.title} content={search.content} url={search.url}/>
                ))}
            </div>
        </div>
    )
}

export default Results
