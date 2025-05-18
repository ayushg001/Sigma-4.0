import { useState } from "react";

export default function Counter(){

   let [ count , setCount ] = useState(0);

    function increaseCount(){
        setCount( (currcount) => {
            return currcount +1;
        });
        console.log("count = ", count);


    }

    return (

        <div>
            <h3>Count = {count}</h3>
            <button  onClick={increaseCount}>Increase Count</button>
        </div>
    )
}