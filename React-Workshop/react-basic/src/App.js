import './App.css';
import React from 'react';
import Transaction from './components/transaction';
import FormComponent from './components/FormComponent';
import { useState, useEffect, useReducer } from 'react';
import DataContext from './data/DataContext';
import ReportComponent from './components/ReportComponent';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [items,setItems]=useState([])

  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)
  const onAddNewItem = (newItem)=>{
    setItems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  useEffect(()=>{
    const amounts = items.map(items => items.amount)
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const outcome = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1
    setReportIncome(income.toFixed(2))
    setReportExpense(outcome.toFixed(2))
  },[items,reportIncome,reportExpense])


  return (
    <DataContext.Provider value={{income:reportIncome,expense:reportExpense}}>
      <div className='container'>
      <h1 style={{color: 'orange',textAlign: 'center'}}>โปรแกรมรายรับราย-จ่าย</h1>
      <Router>
        <div>
          <ul className='horizontal-menu'>
            <li>
              <Link to="/">ข้อมูลบัญชี</Link>
            </li>
            <li>
              <Link to="/insert">บันทึกข้อมูล</Link>
            </li>
          </ul>
          <Routes>
            <Route path='/' exact element={<ReportComponent/>}/>
            <Route path='/insert' element={[<FormComponent onAddItem={onAddNewItem}/>,<Transaction items = {items}/>]}/>
          </Routes>
        </div>
      </Router>
    </div>
    </DataContext.Provider>
  );
}

export default App;



// const count=0
// const reducer=(state,action)=>{
//   switch(action.type){
//     case "ADD" :
//       return state+1
//     case "SUB" :
//       return state-1
//     case "CLEAR":
//       return 0
//   }
// }

// const [result,dispatch] = useReducer(reducer,count)
// return (
//   <div align="center">
//     <h1>{result}</h1>
//     <button onClick={()=>dispatch({type:"ADD"})}>+</button>
//     <button onClick={()=>dispatch({type:"SUB"})}>-</button>
//     <button onClick={()=>dispatch({type:"CLEAR"})}>reset</button>
//   </div>
// );

//-------------------reducer----------------

// const [showReport,setShowReport]=useState(false)
//   const reducer=(state,action)=>{
//     switch(action.type){
//       case "true" :
//         return setShowReport(true)
//       case "false" :
//         return setShowReport(false)
//     }
//   }

//   const [result,dispatch] = useReducer(reducer,showReport)
//   return (
//     <DataContext.Provider value={
//       {
//         income:reportIncome,
//         expense:reportExpense
//       }
//     }>
//       <div className='container'>
//       <h1 style={{color: 'orange',textAlign: 'center'}}>โปรแกรมรายรับราย-จ่าย</h1>
//       {showReport && <ReportComponent/>}
//       <FormComponent onAddItem={onAddNewItem}/>
//       <Transaction items = {items}/>
//       <div align="center">
//         <h1>{result}</h1>
//         <button onClick={()=>dispatch({type:"true"})}>แสดง</button>
//         <button onClick={()=>dispatch({type:"false"})}>ซ่อน</button>
//       </div>
//     </div>
//     </DataContext.Provider>
    
//   );
// }