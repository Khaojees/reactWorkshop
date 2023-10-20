import './App.css'
import { DataContext } from "../App"
import {useContext} from "react"
import QuestionsData from "../data/QuestionsData.js"

const Score = () =>{
      const {score,setScore} = useContext(DataContext)
      const {appState,setAppState} = useContext(DataContext)

      const retest = ()=>{
            setAppState("Menu")
            setScore(0)
      }

      return(
            <div className="score">
                  <h1>Your score is {score} / {QuestionsData.length}</h1>
                  <button onClick={retest}>Need Test Again?</button>
            </div>
      )
}
export default Score