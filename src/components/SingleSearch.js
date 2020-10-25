import React from 'react'
import '../css/SingleSearch.css'

function SingleSearch({image,title,content,url}) {
    return (
        <div className="singleSearch">
            <img src={image}/>
            <div className="singleSearch__container">
                <a href={url}>
                    <p className="singleSearch__title">{title}</p>
                </a>
                <p className="singleSearch__text">{content}</p>
            </div>
        </div>
    )
}

export default SingleSearch
