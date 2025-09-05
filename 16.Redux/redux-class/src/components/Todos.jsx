import { useSelector } from "react-redux"
import AddForm from "./addForm";
import { deleteTodo , markAsDone } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

export default function Todos() {

    const todos = useSelector((state) => state.todos);
    console.log(todos)

    let dispatch = useDispatch();

    let deleteHandler = (id) => {
        console.log("hi")
        dispatch(deleteTodo(id))
    }
    let markHandler = (id) => {
        console.log("hi")
        dispatch(markAsDone(id))
    }
    return(
        <div>
            <AddForm/>
            <h2>Todos</h2>
            
            <ul>
                {todos.map((todo) => (
                    <li 
                        key={todo.id} 
                    style={{
                            color: todo.isDone ? "green" : "white",   // ✅ change color
                            textDecoration: todo.isDone ? "line-through" : "none" // optional
            }}
                    > {todo.task} &nbsp; &nbsp; 
                    <button onClick={() => deleteHandler(todo.id)} > Delete  </button>  &nbsp; &nbsp; 
                    <button onClick={ () => markHandler(todo.id)}>Mark as Done</button></li>
                )  ) }
            </ul>
        </div>
    )
}
