import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
// react-redux 做了两件事：
// 第一件: 提供了一个provider, 实现将store对象注入全部组件里
// 第二件：实现了将 store里的state, 和对state的操作 连接到 容器组件上，容器通过访问props来获得连接过来的state,func

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import store from './store/'

// Provider负责把store传递给各个组件
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();