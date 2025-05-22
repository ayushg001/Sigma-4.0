import { useState } from "react"
// import "./lottery.css"
import { genTicket, sum } from "./helper"
import Ticket from "./Ticket";


export default function Lottery({ num=3 , winCondition}) {
    let [ ticket , setTicket  ] = useState(genTicket(num));

    let isWinning = winCondition(ticket) ; 

    let play = () => {
        setTicket(genTicket(num));
    }
    return(
        <div>
        <h1>Lottery Game !</h1>
       <Ticket ticket={ticket}/>
        <button onClick={play}>Play</button>
        <h3>{ isWinning  && "you win"}</h3>
        </div>
    )
}