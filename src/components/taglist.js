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
                <p>热门标签</p>
                <a>查看全部</a>
            </div>
            <section>
                <ul>
                    <li>
                        <div>
                            <div></div>
                            <img src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/63f30b17-3122-4af1-bfe7-a86b485891aa.jpg@!550" alt=""/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div></div>
                            <img src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/63f30b17-3122-4af1-bfe7-a86b485891aa.jpg@!550" alt=""/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div></div>
                            <img src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/63f30b17-3122-4af1-bfe7-a86b485891aa.jpg@!550" alt=""/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div></div>
                            <img src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/63f30b17-3122-4af1-bfe7-a86b485891aa.jpg@!550" alt=""/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div></div>
                            <img src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/63f30b17-3122-4af1-bfe7-a86b485891aa.jpg@!550" alt=""/>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
  }
}

export default Taglist