import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <>
        <div className="card my-2">
        <img src={imageUrl?imageUrl:"https://cdn.dribbble.com/userupload/14122506/file/original-5e35aa8d26b22b288352fc43116d1862.jpg?crop=0x0-1600x1200&resize=400x300&vertical=center"} className="card-img-top" alt="..."/>
        <div className="card-body" style={{backgroundColor:'#1F0985',color:'white'}}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
        </div>
        </div>
      </>
    )
  }
}

export default NewsItem
