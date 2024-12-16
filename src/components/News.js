import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import { Container, Button, Spinner } from 'react-bootstrap';

export class News extends Component {

static Props={
  contry: 'in',
  pageSize:6,
  category: 'general',
}
static propTypes={
  contry: PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}

  constructor() {
    super();
    console.log('hello');
    this.state = {
      articles: [],
      loading: false,
      page: 1 // Initialize the page state here
    };
  }

  async componentDidMount() {
    console.log('cdm');
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=467cc7e6ba544b3190e527b7ef222585&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults });
  }

  handelPreviousClick = async () => {
    console.log('Previous');
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=467cc7e6ba544b3190e527b7ef222585&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading:false
    });
  };

  handelNextClick = async () => {
    console.log('Next');
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
      console.log('No more results available');
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=467cc7e6ba544b3190e527b7ef222585&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})     
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        loading:false
      }, () => {
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  };

  render() {
    return (
      <div className='my-3'>
        <Container>
          <h1 className='text-center'>Kt -The best News Provider</h1>
          {this.state.loading && <Spinner className='text-center' animation='border' />}
          <div className='row'>
            {this.state.articles.map((element) => {
              return (
                <div className='col-md-4' key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : 'Title Not Available'}
                    description={element.url}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
          <div className='container d-flex justify-content-between'>
            <Button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.handelPreviousClick}>
              &larr; Previous
            </Button>
            <Button
              disabled={this.state.page >= Math.ceil(this.state.totalResults/this.props.pageSize)}
              type='button'
              className='btn btn-dark'
              onClick={this.handelNextClick}
            >
              Next &rarr;
            </Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default News;
