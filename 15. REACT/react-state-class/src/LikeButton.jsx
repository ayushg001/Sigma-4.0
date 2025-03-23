import { useState } from "react"

export default function LikeButton(){

    let [isLiked , setIsLiked] = useState(false);
    let [clicks , setClicks] = useState(0);
    function Clicked(){
        setIsLiked(!isLiked)
        setClicks(clicks+1)
        console.log("clicked")
}

let likeStyle = {color: "red"};

    return(
        <div>
            <p>Clicks = {clicks}</p>
            <p onClick={Clicked}>
                {
                    isLiked ? <i className="fa-solid fa-heart" style={likeStyle}></i> :  <i className="fa-regular fa-heart"></i>
                            
                }   
                
                </p>
        </div>
    )
}