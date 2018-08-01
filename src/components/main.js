import React, { Component } from 'react';
import './main.scss';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

import {Home} from '../page/home'
import {Explore} from '../page/explore'
import {Photos} from '../page/photos'
import {Videos} from '../page/videos'
import {Topics} from '../page/topics'
// import list from '../page/home/views/list2'

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
          showMenu:false
        };
      }
    //点击弹出关闭菜单--------------------------------------------
    isPop=()=>{
        this.setState({
            showMenu: !this.state.showMenu
          });
    }
    render() { 
        return ( 
            <Router>
                <div styleName="main">
                    <div styleName="top">
                        <div styleName={this.state.showMenu?'pop active':'pop'} onClick={this.isPop}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div styleName="logo">
                            <img src="https://sp-webfront.skypixel.com/skypixel/v2/public/assets/images/logo-cn.00c32c62.svg" alt="" />
                        </div>
                        <div styleName="user">
                            <i>&#xe78c;</i>
                        </div>
                    </div>
                    <div styleName={this.state.showMenu?'menu active':'menu'}>
                        <ul>
                            <li>
                                <Link to="/" onClick={this.isPop}>
                                <span>首页</span>
                                <i>></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/explore" onClick={this.isPop}>
                                <span>探索</span>
                                <i>></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                <span>消息</span>
                                <i>></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                <span>博客</span>
                                <i>></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                <span>常见问题</span>
                                <i>></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                <span>语言</span>
                                <b>中文</b>
                                <b>English</b>
                                </Link>
                            </li>
                        </ul>
                        <div>
                            <span>关注Skypixel官方微博</span> 
                        </div>
                    </div>

                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/explore" component={Explore}/>
                        <Route path="/photos/:slug" component={Photos}/>
                        <Route path="/videos/:slug" component={Videos}/>
                        <Route path="/topics/:slug" component={Topics}/>
                    </Switch>
                </div>
            </Router>
         );
    }
}
 
export default Main;