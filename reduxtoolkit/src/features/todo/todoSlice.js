import {createSlice, nanoid} from '@reduxjstoolkit';

const initialState = {
    todos:[{id:1, text:"helloworld"}]
}



export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state, action) => {
             const todo = {
                id:nanoid(),
                text:action.payload,
             }
        },
        removeTodo: () => {},
    }
})