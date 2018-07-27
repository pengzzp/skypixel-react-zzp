import { createStore, applyMiddleware } from 'redux'

import reducer from './reducer'

// thunk, 是个中间件，负责处理redux异步请求
import thunk from 'redux-thunk'

// applyMiddleware, 往store上面挂载中间件的一个方法
const store = createStore(reducer, applyMiddleware(thunk))

export default store