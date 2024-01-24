import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice';


const [input, setInput] = useState('')
const dispatch = useDispatch()

const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input))
    setInput('')
}

function AddTodo(){
    return <>
    <form onSubmmit={addTodoHandler}>

    </form>
    </>
}
export default AddTodo