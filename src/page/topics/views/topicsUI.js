import React, { Component } from 'react'
import '../topics.scss'
import { PullToRefresh} from 'antd-mobile';
import { findDOMNode} from 'react-dom';


export default class topics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      height: document.documentElement.clientHeight,
      topinfo:{},
      sort:'hot',
      items:[],
      n:0
    };

    this.getitems('hot',0)
  }
  refresh(){//上拉刷新
    this.setState(
      (prevState)=>{
        return {
          n:prevState.n+15
        }
      },()=>{
        this.getitems(this.state.sort,this.state.n)
        this.setState({ refreshing: false });
      })
  }
  getitems(sort,n){//列表数据
    fetch(`/api/v2/topics/${this.props.match.params.slug}/works?lang=zh-CN&platform=web&device=mobile&sort=${sort}&limit=15&offset=${n}`)
    .then(response=>response.json())
    .then(result=>{
      this.setState((prevState) => {
        return {
          items: [...prevState.items,...result.data.items]
        }
      })
    })
  }
  change(sort){
    this.setState({
      n:0,
      sort:sort
    })
    fetch(`/api/v2/topics/sport/works?lang=zh-CN&platform=web&device=mobile&sort=${sort}&limit=15&offset=0`)
    .then(response=>response.json())
    .then(result=>{
      this.setState({items:[...result.data.items]})
    })
  }
  time(num){
    let min=Math.floor(num/60)
    min=(Array(2).join(0)+min).slice(-2)
    let sec=num%60
    return(
      <span>{`${min}:${sec}`}</span>
    )
  }
  render() {
    return (
        <div styleName='topics'>
          <PullToRefresh
            damping={100}
            ref='ptr'
            style={{
              height: this.state.height,
              overflow: 'auto',
            }}
            indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
            direction='up'
            refreshing={this.state.refreshing}
            onRefresh={() => {
              this.setState({ refreshing: true });
              this.refresh()
            }}
          >
            <div styleName="top" style={{ backgroundImage:'url('+this.state.topinfo.image+')'}}>
              <div></div>
              <h1>{this.state.topinfo.name}</h1>
              <ul>
                <li styleName={this.state.sort==='hot'?'active':''} onClick={this.change.bind(this,'hot')}>最热</li>
                <li styleName={this.state.sort==='latest'?'active':''} onClick={this.change.bind(this,'latest')}>动态</li>
              </ul>
            </div>
            <div styleName="list">
            {
              this.state.items.map((val,i)=>
                (val.slug?
                  <a styleName={i%5===0?"big":"small"} key={val.slug}>
                    <div style={{ backgroundImage:'url('+val.image.small+')'}}>
                      <img src="" alt=""/>
                    </div>
                    {val.type==="video"?
                      this.time(val.duration)
                      :null
                    }
                  </a>
                  :null
                )
              )
            }
            </div>
          </PullToRefresh>
        </div>
    )
  }
  componentDidMount(){
    let a=findDOMNode(this.refs.ptr)
    const hei = this.state.height - a.offsetTop;
    setTimeout(() => this.setState({
      height: hei
    }), 0);
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
  }
}
