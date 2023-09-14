export const initialValue = 10

export const reducer = (state, action) =>{
    if(action.type==='increment'){
        return state + 1
    }else if(action.type==='decrement'){
        return state - 1
    }else if(action.type==='addByValue'){
        return state + action.value
    }
}