import './App.css'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'
import Lottery from './Lottery'
import { sum } from './helper'

function App() { 
  // Passing props to Lottery component as function onle till 3 lines
  // let winCondition = (ticket) => {
  //   return sum(ticket) === 15;
  // };
  let winCondition = (ticket) => {
    return ticket.every((num) => num === ticket[0]);
  };//Another condition

  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  )
}

export default App
