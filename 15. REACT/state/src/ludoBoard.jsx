import { useState } from "react"

export default function LudoBoard() {
    let [ moves , setMoves ] = useState({ blue : 0 , red : 0 , green : 0 , yellow : 0 })

    let updateBlueMoves = () => {
        // setMoves ( {...moves  , blue : moves.blue +1 } )
        console.log( `moves.blue = ${moves.blue}` )
        setMoves ( (prevMoves) => {
            return {  ...prevMoves , blue : prevMoves.blue +1  }
        } )
    }
    let updateRedMoves = () => {
        // setMoves ( {...moves  , blue : moves.blue +1 } )
        console.log( `moves.red = ${moves.red}` )
        setMoves ( (prevMoves) => {
            return {  ...prevMoves , red : prevMoves.red +1  }
        } )
    }

    let updateGreenMoves = () => {
        // setMoves ( {...moves  , blue : moves.blue +1 } )
        console.log( `moves.green = ${moves.green}` )
        setMoves ( (prevMoves) => {
            return {  ...prevMoves , green : prevMoves.green +1  }
        } )
    }

    let updateYellowMoves = () => {
        // setMoves ( {...moves  , blue : moves.blue +1 } )
        console.log( `moves.yellow = ${moves.yellow}` )
        setMoves ( (prevMoves) => {
            return {  ...prevMoves , yellow : prevMoves.yellow +1  }
        } )
    }



    return (
        <div>
            <p> Game begins !</p>
            <div>
                <p>Blue Moves = {moves.blue} </p>
                <button onClick={updateBlueMoves} style={{backgroundColor : "blue"}}> +1 </button>

                 <p>Red Moves = {moves.red} </p>
                <button onClick={updateRedMoves} style={{backgroundColor : "red"}}> +1 </button>

                 <p>Green Moves = {moves.green} </p>
                <button onClick={updateGreenMoves} style={{backgroundColor : "green"}}> +1 </button>

                 <p>Yellow Moves = {moves.yellow} </p>
                <button onClick={updateYellowMoves} style={{backgroundColor : "yellow" , color : "black"}}> +1 </button>
            </div>
        </div>
    )
}