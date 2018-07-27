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
        gethomeList(){
            dispatch(getList())
        }
    }
}


export default connect(mapState,mapDispatch)(homeUI)
