import { DataContext } from "../App"
import {useContext} from "react"
import './App.css'

const Menu = () =>{
      const {setAppState} = useContext(DataContext)
      return(
            <div className="menu">
                  <h1>menu naja</h1>
                  <button onClick={()=>setAppState("Quiz")}>Start Quiz</button>
            </div>
      )
}
export default Menu