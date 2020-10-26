import React, {useEffect,useState} from 'react'
import Navbar from '../components/Navbar';
import {useSelector} from 'react-redux';
import {selectSearch} from '../features/searchSlice';
import SingleSearch from '../components/SingleSearch';
import "../css/Results.css";

function Results() {

    const [data,setData] = useState([]);
    const [page,setPage] = useState(1);
    const search = useSelector(selectSearch);
    const apiKey = "06255b46d2c74fc286d8e87b99aebe0f";
    const url = `https://newsapi.org/v2/everything?q=${search}&pageSize=5&page=${page}&apiKey=${apiKey}`;

    useEffect(()=>{
        fetch(url).then((response)=>response.json()).then((data)=>setData(data.articles));
    }, [url])

    return (
        <div>
            <Navbar search={search}/>
            <div className="results__container">
                {data.map((search,id)=>(
                    <SingleSearch key={id} image={search.urlToImage} title={search.title} content={search.content} url={search.url}/>
                ))}
            </div>
            <div className="results__buttons">
                {page>1 ? 
                    <button onClick={()=>{setPage(page-1)}} className="results__buttonClick">Previous Page</button>
                    : <button disabled>Previous Page</button>  
                }
                <p className="results__page">{page}</p>
                {page<20 ?
                    <button onClick={()=>{setPage(page+1)}} className="results__buttonClick">Next Page</button>
                    : 
                    <button disabled>Next Page</button>
                }
            </div>
        </div>
    )
}

export default Results
