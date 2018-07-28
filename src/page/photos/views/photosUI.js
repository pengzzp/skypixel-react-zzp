import React, { Component } from 'react'
import '../photos.scss'

export default class photos extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
    return (
        <div>
        <iframe 
        scrolling="no" 
        title="鹤山方圆福朋喜来登酒店" 
        poster="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/8783cf0b-9800-4414-9f56-fed464ac5aad.jpg@!1200" 
        width="100%" 
        height="100%" 
        frameborder="0" 
        allowfullscreen="" 
        src="/photos/play/02add83a-a8f3-4dd8-b717-29f0cc4c5e59?buttons=on">
        </iframe>
        </div>
    )
  }
  componentDidMount(){
  }
}
