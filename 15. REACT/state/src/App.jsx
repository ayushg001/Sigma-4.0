
import './App.css'
import Counter from './counter'
import Likebutton from './likeButton'
import LudoBoard from './ludoBoard'
import TodoList from './TodoList'
import Lottery from './Lottery'
import TicketNum from './Ticketnum'
import Ticket from './Ticket'
import { sum } from './helper'

function App() {
 
  let winCondition = (Ticket) => {
    return sum(Ticket) === 15;
  }

  return (
    <>

    {/* <h1>States in React</h1> */}
    {/* <Counter/> */}
    {/* <Likebutton/> */}
    {/* <LudoBoard/> */}
    {/* <TodoList/> */}
    
       {/* <Ticket ticket={[0 ,1,2,]} />  */}
        {/* <TicketNum num={3} /> 
         <TicketNum num={3} />                                                          */}
    <Lottery  num={3} winCondition={winCondition} />

    </>
  )
}

export default App
