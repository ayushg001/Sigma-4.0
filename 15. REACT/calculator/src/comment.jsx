import { useState } from "react"
import "./comment.css"
import CommentsForm from "./Commentsform"

export default function Comment(){

    let [ comments , setComments] = useState([{
        username : "@ask", 
        remarks : "great job!",
        rating : 4
    }])

    let addNewComment = (comment) => {
        setComments( (currComments) => {
            return [ ...currComments , comment];
        })
        console.log("added new comment")
    }

    return (
        <>
        <div>
            <h3>All Comments  </h3>
               {comments.map( (comment , idx ) => ( 
                 <div className="comment" key={idx}>
                    <span>{comment.remarks}</span>
                    &nbsp;
                    <span>(Rating = {comment.remarks})</span>
                     &nbsp;
                    <p> - {comment.username}</p>
                </div>
               ))}
               
        </div>
        <hr />
         <CommentsForm addNewComment = {addNewComment}/>
         </>
    )
}