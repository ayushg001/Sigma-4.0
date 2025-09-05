import { createSlice , nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos : [ { id : "abc" , task : "demo-task" , isDone : false}]
}

export const todoSlice = createSlice({
    name  :"todo",
    initialState,
    reducers : {    // state , action
            addTodo : (state , action) => {   // a reducer
                const newTodo = {
                    id : nanoid(),
                    task : action.payload,
                    isDone : false
                };
                state.todos.push(newTodo);
            },
            deleteTodo : (state , action) =>{  // 2. reducer
                state.todos = state.todos.filter((todo) => todo.id != action.payload ) ;
            },
            markAsDone : (state , action) => {  // 3. reducer
                state.todos = state.todos.map( (todo) => {
                    if(todo.id === action.payload){
                        todo.isDone = true;
                    }
                }
                )
            }
    }
})