import React, { Component } from 'react'
import './taglist.scss'


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
            </section>
        </div>
    );
  }
}

export default Taglist