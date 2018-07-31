import React, { Component } from 'react'
import '../videos.scss'
import { ActivityIndicator} from 'antd-mobile';

export default class videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info:''
    };

  }
  
  render() {
    return (
        <div styleName="videos">
          <div styleName="top">
          {this.state.info?
              <a>
                <img src={this.state.info.user.avatar.small} alt=""/>
                <p>{this.state.info.user.name}</p>
              </a>:''
          }
            <button>
              <span>+</span>
              <span>关注</span>
            </button>
          </div>
          <div styleName="show">
                {
                  this.state.info
                      ?
                    <a>{
                        <iframe 
                        scrolling="no" 
                        title={this.state.info.tltle} 
                        poster={this.state.info.image.medium}
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        allowfullscreen=""
                        src={`${this.state.info.play_url}?autoplay=0&amp;$poster=${this.state.info.image.medium}`}>
                        </iframe>
                      }</a>
                      :
                      <ActivityIndicator color="white" size="large"/>
              }
          </div>
          <div styleName="info">
          {/* --------------------------------- */}
            <div>
              <a>
                <i>&#xe7e1;</i>
                <span>{this.state.info.like_count}</span>
              </a>
              <a>
                <i>&#xe667;</i>
                <span>{this.state.info.favorite_count}</span>
              </a>
              <a>
                <i>&#xe86e;</i>
                <span>分享</span>
              </a>
            </div>
            {/* --------------------------------- */}
            <div>
              <img src="https://sp-webfront.skypixel.com/skypixel/v2/public/assets/images/ordinary-s.25f33d98.svg" alt="" />
              <span>{this.state.info.title}</span>
            </div>
            {/* --------------------------------- */}
            <div>
              <p><span>{this.state.info.view_count}</span>次浏览</p>
              <p>使用<span>{this.state.info.equipment?this.state.info.equipment.name:''}</span>拍摄</p>
            </div>
            {/* --------------------------------- */}
            <div>
              {this.state.info.description}
            </div>
          </div>
        </div>
    )
  }
  componentDidMount(){
    let slug=this.props.match.params.slug;
    fetch(`/api/v2/videos/${slug}?lang=zh-CN&platform=web&device=mobile&compatible=true`)
    .then(response=>response.json())
    .then(result=>{
        this.setState(
           {
            info:result.data.item
           }
        )
      })
  }
}
