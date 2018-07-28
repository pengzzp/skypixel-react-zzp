import React, { Component } from 'react'
import '../home.scss'
import { Carousel} from 'antd-mobile';
import { PullToRefresh} from 'antd-mobile';
import { findDOMNode } from 'react-dom';

import Taglist from '../../../components/taglist'


export default class home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carousel_img:[],
      refreshing: false,
      height: document.documentElement.clientHeight,
      tagInfo:[],
      needposition:[],//需要插入tag的位置
      taglistApi:[],//需要获取taglist的接口地址
      taglistInfo:[],//taglist的数据信息.
      n:0
    };
    this.props.gethomeList(0)
  }

  isShow(i){
      if(this.state.needposition.indexOf(i)>=0){
        return true
      }
  }  
  refresh(){
    this.setState(
    (prevState)=>{
      return {
        n:prevState.n+16
      }
    },()=>{
      this.props.gethomeList(this.state.n)
    })
  }
  render() {
    return (
      <div styleName="home">
        <PullToRefresh
            damping={60}
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
              setTimeout(() => {
                this.setState({ refreshing: false });
              }, 1000);

              this.refresh()
            }}
          >
          {/* 轮播图---------------------------------------------------- */}
            <Carousel
              autoplay={true}
              infinite={true}
              style={{width: '100%', height:186}}
            >
              {this.state.carousel_img.map(val => (
                <a
                  key={val.id}
                  style={{display:' inline-block',width:'100%',height:186}}
                  href={val.link_url}
                >
                  <img
                    src={val.pc_cover}
                    alt=""
                    style={{ height:'100%'}}
                  />
                </a>
              ))}
            </Carousel>
            {/*---------------------------------------------------- */}
            
            <div styleName="list">
            {
              this.props.homeList.map((val, i) => {
                return(
                  <div key={val.slug}>

                    {
                      this.isShow(i)?<Taglist
                      //i=2 取taginfo的第一个数据 i=6 取第二个数据 
                        title={this.state.tagInfo[this.state.needposition.indexOf(i)].title} 
                        items={this.state.taglistInfo[this.state.needposition.indexOf(i)]}
                      />:null
                    }
                    
                    <div styleName="item">
                      <div styleName="top">
                          <img src={val.user.avatar.small} alt="" />
                        <div>
                          <p>{val.user.name}</p>
                          <p>{val.location ? val.location.label : ''}</p>
                        </div>
                      </div>
                      <div styleName="mid">
                        <img src={val.image.small} alt="" />
                        <span>{}</span>
                      </div>
                      <div styleName="bottom">
                        <h3>{val.title}</h3>
                        <div>
                          <a>
                            <i>&#xe7e1;</i>
                            <span>{val.like_count}</span>
                          </a>
                          <a>
                            <i>&#xe667;</i>
                            <span>{val.favorite_count}</span>
                          </a>
                          <a>
                            <i>&#xe86e;</i>
                            <span>分享</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  )
                }
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
    // 轮播图
    fetch('/api/website/cms_page_contents/skypixel_root_mobile_banner_top/cms_banners?language=zh-CN')
    .then(response=>response.json())
    .then(result=>{
      this.setState((prevState) => {
        return {
          carousel_img: [...prevState.carousel_img, ...result.cms_banners]
        }
      })
    })
    //获取首页列表
    
    //获取标签信息
    fetch('/api/v2/pages/mobile?lang=zh-CN&platform=web&device=mobile')
    .then(response=>response.json())
    .then(result=>{
      // console.log(result.data.items)
      this.setState((prevState) => {
        return {
          tagInfo: [...prevState.tagInfo, ...result.data.items]
        }
      })
      result.data.items.forEach(item => {
        this.setState((prevState) => {
          return {
            needposition: [...prevState.needposition,item.position]
          }
        })
        
        //根据标签信息中的api，获取taglist中的信息
        fetch(`/api/${item.api}?lang=zh-CN&platform=web&device=mobile&limit=10&offset=0`)
          .then(response=>response.json())
          .then(result=>{
            this.setState((prevState) => {
                  return {
                    taglistInfo: [...prevState.taglistInfo,result.data.items]
                  }
                })
            })
      });
      
    })
  }

  
}
