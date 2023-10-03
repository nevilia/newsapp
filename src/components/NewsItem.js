import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class NewsItem extends Component {
    
    render() {
        let {title, description, imageUrl, newsUrl} = this.props // deconstruction
        return (
            <div className='my-3'>
                <div className="card" >
                    <img src={imageUrl?imageUrl:"https://i.ytimg.com/vi/KI6plfbROd8/maxresdefault.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"> {title}...</h5>
                        <p className="card-text">{description}...</p>
                        <Link to={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem