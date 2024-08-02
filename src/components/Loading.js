import React, { Component } from 'react'
import cheetah from './loader.webp'
import Loadingtext from './332.gif'

export default class loading extends Component {
  render() {
    return (
      this.props.load &&
      <div class="d-flex flex-column justify-content-center align-items-center" style={{position:'absolute',top:'50%',left:'50%',transform: 'translate(-50%,-50%)'}}>
      <img src={cheetah} style={{width:'45%',height:'40%'}} alt=""></img>
      <img src={Loadingtext} className="my-2" alt="."></img>
      </div>
    )
  }
}
