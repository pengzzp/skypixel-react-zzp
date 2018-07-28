import { connect } from 'react-redux'
import homeUI from './homeUI.js'

import {getList} from '../actionCreator'

const mapState=(state)=>{
    return {
        homeList:state.home.list
    }
}
const mapDispatch=(dispatch)=>{
    return{
        gethomeList(offset){
            dispatch(getList(offset))
        }
    }
}


export default connect(mapState,mapDispatch)(homeUI)
