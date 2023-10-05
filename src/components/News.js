import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem'
import Loading from './Loading'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

// import { useLoaderData } from 'react-router-dom';

// // export const dataLoader = async () => {}

// export async function dataLoader() {
//     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`
//     setState({loading: true})  
//     let data = await fetch(url)
//     let res = await data.json()
//     setState({articles: res.articles, totalResults: res.totalResults, loading: false  })

//     return {res}
//  }

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        let res = await data.json()
        setArticles(res.articles)
        setTotalResults(res.totalResults)
        setLoading(false)

    }
    useEffect(() => {
        document.title = `${props.category} - NewsMonk`
        updateNews()
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
        setPage(page + 1)

        let data = await fetch(url)
        let res = await data.json()
        setArticles(res.articles)
        setTotalResults(res.totalResults)
    }

    return (
        <>
            <h1 className='text-center' style={{ margin: '45px 0px', marginTop: '90px' }}>NewsMonk- Top Headlines</h1>
            {loading && <Loading />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Loading />}
            >
                <div className='container'>
                    <div className="row">
                        {articles.map((element) => {

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
News.defaultProps = {
    country: 'in',
    pageSize: 15,
    category: 'general',
}
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
}
export default News