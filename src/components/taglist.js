import React, { Component } from 'react'
import './taglist.scss'
import photo from '../assets/icon/图片.svg'
import video from '../assets/icon/视频.svg'

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
                                <li key={val.slug}>
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
                                    <i><img src={val.type==="photo"?photo:(val.type==="video"?video:'')} alt=""/></i>
                                </li>
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