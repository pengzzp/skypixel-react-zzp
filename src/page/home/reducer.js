import { GET_LIST } from './actionType'

const defaultValue={
    list:[]
}

export default (state=defaultValue,action)=>{
    switch(action.type){
        case GET_LIST:
            return {
                list:[...state.list,...action.data]
            }
        default:
            return state
    }
}