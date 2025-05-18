import { use, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){

    let [ todos , setTodo ] = useState( [ { task : "sample-task " , id : uuidv4() , isDone : false } ] )
    let [ newTodo , setNewTodo] = useState("")

    let addNewTask = () => {
       
        setTodo(  (prevtodos) => {
            return [ ...prevtodos ,  {task :  newTodo , id : uuidv4() , isDone : false} ]
        } )
        console.log(todos)
        setNewTodo("")
    }

    let updateNewTodo = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {                                                              
        console.log("task to be deleted")
                                                                                               
        setTodo( (prevtodos) => prevtodos.filter( (todo) => todo.id != id))
    }

    let upperCaseAll = () => {
      setTodo( (prevTodos) =>  prevTodos.map((todo) => {
            return {
                ...todo,
                task : todo.task.toUpperCase(),
            };
        })
    )
    }

      let marksAsDoneAll = (id) => {
        console.log("marks")
        setTodo ( (prevTodos ) => prevTodos.map( (todo) => {
           
                return {
                    ...todo , 
                    isDone : true
            }
        } ) )
        
    }

    let UpperCaseOne = (id) => {
        console.log("one")
         setTodo( (prevTodos) =>  prevTodos.map((todo) => {

            if ( todo.id == id) {
                 return {
                ...todo,
                task : todo.task.toUpperCase(),
            };
            } else {
                return todo ; 
                
            }
           
        })
    )

    }

    let marksAsDone = (id) => {
        console.log("marks")
        setTodo ( (prevTodos ) => prevTodos.map( (todo) => {
            if ( todo.id == id){
                return {
                    ...todo , 
                    isDone : true
                }
            } else {
                return todo ;
            }
        } ) )
        
    }

    

    return (
        <div>
            <input type="text" placeholder="add a task" value={newTodo} onChange={updateNewTodo} />
            <br /> <br />
            <button onClick={addNewTask}>Add a Task</button>
            <br /> <br />
            <br /> <br />

            <hr />
            <h4>Tasks Todo </h4>
            <ul> {
                todos.map(  (todo) => (
                    <li key={todo.id} >

                       <span style={
                         todo.isDone ? {textDecoration:'line-through'}  : {}
                            
        } >                  {todo.task}   </span>
                        &nbsp; &nbsp;
                        <button onClick={ () => deleteTodo(todo.id)}>Delete</button> 
                                        {/*arrow fn will not run the fn */}
                                        &nbsp; &nbsp;
                          <button onClick={ () => UpperCaseOne(todo.id)}>Upper Case One</button> 

                           <button onClick={ () => marksAsDone(todo.id)}>Mark as done</button>
                    </li>
                ) )
            }
            </ul>
            <br /> <br />
            <button onClick={upperCaseAll} > UpperCase All </button> &nbsp; &nbsp;
             <button onClick={marksAsDoneAll} > Mark as Done All </button>
        </div>
    )
}