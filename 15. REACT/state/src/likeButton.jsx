import { useState } from "react"

export default function Likebutton() {

     let [ isLiked , setIsLiked ]  = useState(false);
     let [ count , setCount ]  = useState(0);

     let toggleLiked = () => {
        setIsLiked(!isLiked)
        console.log(isLiked)
     }

     let likeStyle =  { color : "red"};
    return (
        <div> 
            <p onClick={toggleLiked}>
                {
                    isLiked ? ( <i className="fa-solid fa-heart " style={likeStyle}></i> ) 
                    :
                     ( <i className="fa-regular fa-heart"></i> )
                }
                
                </p>
        </div>
    )
}