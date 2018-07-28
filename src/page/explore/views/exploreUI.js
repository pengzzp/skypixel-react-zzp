import React, { Component } from 'react'
import '../explore.scss'
import Taglist from '../../../components/taglist'

export default class home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toplist:[],
      tagInfo:[],
      tagList:[]
    };
  }
  render() {
    // console.log(this.state.toplist)
    return (
      <div styleName="explore">
        <div styleName="top">
        {
          this.state.toplist.map(val=>(
          <a key={val.slug}>
              <div>
                  <img src={val.image} alt=""/>
              </div>
              <p>
                  <img src={val.icon} alt=""/>
                  <span>{val.name}</span>
              </p>
          </a>
          )
        )
        }
        </div>
        {/* --------------------------------- */}
        <section>
          {
            // this.state.tagList.map(val=>(
            //   <Taglist
            //     // title={val.nams}
            //     // items={val}
            //   />
            // )
            // )
            console.log(this.state.tagList)
          }
        </section>
      </div>
    )
  }
  componentDidMount(){
    //顶部数据----------------------------------------------------
    fetch('/api/v2/topics?lang=zh-CN&platform=web&device=mobile&limit=10')
    .then(response=>response.json())
    .then(result=>{
      this.setState((prevState)=>{
          return {
            toplist:[...prevState.toplist,...result.data.items]
          }
        }) 
    })
    //获取标签信息-------------------------------------------------------------
    fetch('/api/v2/tags?lang=zh-CN&platform=web&device=mobile&limit=12&offset=0')
    .then(response=>response.json())
    .then(result=>{
      this.setState((prevState)=>{
          return {
            tagInfo:[...prevState.tagInfo,result.data.items]
          }
        }) 
        result.data.items.forEach(item => {    
          //根据标签信息中的api，获取taglist中的信息
          fetch(`api/v2/tags/${item.slug}/works?lang=zh-CN&platform=web&device=mobile&limit=16&offset=0`)
            .then(response=>response.json())
            .then(result=>{
              this.setState((prevState)=>{
                return {
                  tagList:[...prevState.tagList,result.data.items]
                }
              }) 
              })
        });
    })
  }
}
