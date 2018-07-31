import { connect } from 'react-redux'
import exploreUI from './exploreUI.js'

const mapState=(state)=>{
    return {
        homeList:state.home.list
    }
}
const mapDispatch=(dispatch)=>{
    return{}
}


export default connect(mapState,mapDispatch)(exploreUI)
