import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";

export class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      article: this.articles,
      loading: false,
      pagenum: 1
    };
  }
  handlePrev = async () => {
    this.setState({ article: this.articles});
    this.setState({ loading: true });
    console.log("PREV");
    await this.setState({ pagenum: this.state.pagenum - 1 });
    this.componentDidMount();
  };
  handleNext = async () => {
    console.log("NEXT");
    this.setState({ article: this.articles});
    this.setState({ loading: true });
    await this.setState({ pagenum: this.state.pagenum + 1 });
    this.componentDidMount();
  };
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&page=${this.state.pagenum}&pageSize=${this.props.pageSize}&apiKey=e59ca01739a24f32a78523e058424491`;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ loading: false });
    this.setState({ article: parsedata.articles,totalResults:parsedata.totalResults });
  }
  render() {
    return (
      <>
        <Loading load={this.state.loading} />
        {!this.state.loading && (
          <div className="container my-3">
            <h2 className="text-center">TOP HEADLINES OF THE DAY</h2>
            <div className="row my-4">
              {this.state.article.map((element) => {
                return (
                  <div className="col-md-4">
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
              <div className="d-flex justify-content-around">
                <button disabled={this.state.pagenum <= 1} type="button" className="btn btn-info my-4"onClick={this.handlePrev}>
                  Previous &larr;
                </button>
                <button disabled={(this.state.pagenum) >= Math.ceil(this.state.totalResults/15)} type="button"className="btn btn-info my-4" onClick={this.handleNext}>
                  Next &rarr;
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default News;
