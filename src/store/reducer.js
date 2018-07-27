import { combineReducers } from 'redux'

import { reducer as home } from '../page/home'

// combineReducers,负责将各个子组件的reducer合并成一个总的reducer
export default combineReducers({
    home
})