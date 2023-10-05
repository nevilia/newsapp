import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

// import { useLoaderData } from 'react-router-dom';

// // export const dataLoader = async () => {}

// export async function dataLoader() {
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
//     this.setState({loading: true})  
//     let data = await fetch(url)
//     let res = await data.json()
//     this.setState({articles: res.articles, totalResults: res.totalResults, loading: false  })

//     return {res}
//  }

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 15,
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number,
    }

    constructor(props) {
        super()
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
        // document.title = `${this.props.category} - NewsMonk`
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let res = await data.json()
        this.setState({ articles: res.articles, totalResults: res.totalResults, loading: false })

    }

    async componentDidMount() {
        this.updateNews()
    }




    fetchMoreData= async () => {
        this.setState({page: this.state.page + 1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        
        let data = await fetch(url)
        let res = await data.json()
        this.setState({ articles: this.state.articles.concat(res.articles), totalResults: res.totalResults})

    }

    render() {


        return (
            <>
                <h1 className='text-center' style={{ margin: '45px 0px' }}>NewsMonk- Top Headlines</h1>
                {/* {this.state.loading && <Loading />} */}

                <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading/>}
        >
            <div className='container'>
                

                <div className="row">
                    {this.state.articles.map((element) => {
                        console.log(element)

                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 40) : ''} description={element.description ? element.description.slice(0, 88) : ''} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                </div>
                </InfiniteScroll>
                
            </>
        )

    }
}

export default News