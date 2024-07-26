import React, { Component } from 'react'
import loader from './loader.webp'

export default class loading extends Component {
  render() {
    return (
      this.props.load && <>
        <img src={loader} style={{width:'45%',height:'40%',position:'absolute',top:'50%',left:'50%',transform: 'translate(-50%,-50%)'}} alt=""></img><br/>
        </>
    )
  }
}
