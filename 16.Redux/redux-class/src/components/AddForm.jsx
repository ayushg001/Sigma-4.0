import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {

    let [ task , setTask] = useState("");
    let dispatch = useDispatch();

    let onChange = (e) => {
        setTask(e.target.value);
    }

    let submitHandler = (evt) => {
        evt.preventDefault();
        console.log(task)
        dispatch(addTodo(task));
        setTask("")
}
    return(
        <>
        <form  onSubmit={submitHandler}>
            <input type="text" onChange={onChange}  />
            <button>Add Task</button>
            </form>
            </>
    )
}


