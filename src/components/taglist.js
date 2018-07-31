import React, { Component } from 'react'
import './taglist.scss'
import photo from '../assets/icon/图片.svg'
import video from '../assets/icon/视频.svg'
import { Link } from 'react-router-dom'

class Taglist extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  componentDidMount() {

  }

  render() {
    return (
        <div styleName="taglist">
            <div>
                <p>{this.props.title}</p>
                <a>查看全部</a>
            </div>
            <section>
                {/* 首页跟探索页数据不同，分两个 */}
                    {this.props.from==="home"
                    ?
                    <ul>
                         {
                             this.props.items?this.props.items.map(val=>(
                                 <li key={val.name}>
                                     <div>
                                         <div></div>
                                         <img src={val.image?val.image.small:val.cover.small} alt=""/>
                                     </div>
                                     <p>
                                         <i></i>
                                         <span>{val.name}</span>
                                     </p>
                                 </li>
                             )):''
                         }
                        </ul>
                    :
                    <ul>
                        {
                            this.props.items?this.props.items.map(val=>(
                            <Link to={val.type==="video"?`/videos/${val.slug}`:`/photos/${val.slug}`} key={val.slug?val.slug:val.created_at}>
                                <li>
                                    <div>
                                        <div></div>
                                        <img src={val.image?val.image.small:''} alt=""/>
                                    </div>
                                    <p>
                                        <i>
                                            <img src={val.user.avatar.small} alt=""/>
                                        </i>
                                        <span>{val.user.name}</span>
                                    </p>
                                    <i>{
                                        val.type==="photo_360"
                                        ?'360°'
                                        :<img src={val.type==="photo"?photo:video} alt=""/>
                                       }
                      
                                    </i>
                                </li>
                            </Link>
                            )):''
                        }
                    </ul> 
                    }
            </section>  
        </div>
    );
  }
}

export default Taglist