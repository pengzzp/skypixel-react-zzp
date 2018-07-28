import{ GET_LIST } from './actionType'

const setList=(data)=>{
    return {
        type:GET_LIST,
        data
    }
}

const getList=(offset)=>{
    return (dispatch)=>{
        fetch(`/api/v2/mobile/feeds?lang=zh-CN&platform=web&device=mobile&limit=16&offset=${offset}`,{
            method:'GET',
        })
        .then(response=>response.json())
        .then(result=>{
            // console.log(result.data.items)
            dispatch(setList(result.data.items))
        })
    }
}

export{
    getList,
    setList
}