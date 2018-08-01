import React, { Component } from 'react'
import '../topics.scss'

export default class topics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topinfo:{},
      sort:'hot'
    };

  }
  
  render() {
    return (
        <div styleName='topics'>
          <div styleName="top" style={{ backgroundImage:'url('+this.state.topinfo.image+')'}}>
            <div></div>
            <h1>{this.state.topinfo.name}</h1>
            <ul>
              <li styleName={this.state.sort==='hot'?'active':''}>最热</li>
              <li styleName={this.state.sort==='latest'?'active':''}>动态</li>
            </ul>
          </div>
        </div>
    )
  }
  componentDidMount(){
    // ------------------------------------------------------
    let slug=this.props.match.params.slug
    fetch(`/api/v2/topics/${slug}?lang=zh-CN&platform=web&device=mobile`)
    .then(response=>response.json())
    .then(result=>{
      // console.log(result.data.item)
      this.setState((prevState) => {
        return {
          topinfo: {...prevState.topinfo,...result.data.item}
        }
      })
    })
    // ------------------------------------------------------
    fetch(`/api/v2/topics/sport/works?lang=zh-CN&platform=web&device=mobile&sort=${this.state.sort}&limit=15&offset=0`)
    .then(response=>response.json())
    .then(result=>{
      // console.log(result)
      // featured
    })
  }
}
