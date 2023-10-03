import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps = {
      country: 'in',
      pageSize: 5,
      category: 'general',
    }
    static propTypes = {
      country: PropTypes.string,
      category: PropTypes.string,
      pageSize: PropTypes.number,
    }

    constructor(){
        super()
        this.state = {
            articles: [],
            loading: false,
            page:  1,
        }
    }
    async componentDidMount() { 
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=858e8d71b3044c8baaf037b0bb9848cc&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading: true})  
        let data = await fetch(url)
        let res = await data.json()
        this.setState({articles: res.articles, totalResults: res.totalResults, loading: false  })
     }


     handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=858e8d71b3044c8baaf037b0bb9848cc&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let res = await data.json()
        this.setState({loading: true})  
        this.setState({
            articles: res.articles,
            page: this.state.page-1,
            loading: false
        })
     }
     handleNextClick = async () => {
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=858e8d71b3044c8baaf037b0bb9848cc&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
          this.setState({loading: true})  
          let data = await fetch(url)
          let res = await data.json()
          this.setState({
                articles: res.articles,
                page: this.state.page+1,
                loading: false
        })
        
        }
     }

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center' style={{margin: '45px 0px'}}>NewsMonk- Top Headlines</h1>
                {this.state.loading && <Loading/>}
                <div className="row">
                {!this.state.loading  && this.state.articles.map( (element)=> {
                    console.log(element)
                
                    return <div className="col-md-4" key = {element.url}>
                        <NewsItem  title={ element.title?element.title.slice(0, 40):''} description={element.description?element.description.slice(0, 88):''} imageUrl={element.urlToImage} newsUrl={element.url} />
                    </div>
                })}
                </div>
                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page<=1} type="button" className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Prev</button>
                    <button disabled={this.state.page+ 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
        
    }
}

export default News