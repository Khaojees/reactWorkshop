import './App.css';
import FoodComponent from './components/FoodComponent';
import {useEffect, useState} from "react"
import MenuData from './data/MenuData';

function App() {
  const [foodData,setFoodData] = useState(MenuData)
  const [dataInPage,setDataInPage] = useState([])
  const [page,setPage] = useState(0)

  const pagination=()=>{
    const foodPerPage = 3
    const pages = Math.ceil(MenuData.length / foodPerPage)
    // console.log(MenuData)
    // console.log(foodPerPage)
    // console.log(pages)

    const newfood = Array.from({length:pages},(data,index)=>{
      const start = index*foodPerPage
      return MenuData.slice(start,start+foodPerPage)
    })
    return newfood
  }
  const handlePage=(index)=>{
    setPage(index)
  }
  useEffect(()=>{
    const paginate = pagination()
    setDataInPage(paginate)
    setFoodData(paginate[page])
    // console.log(paginate)
  },[page])

  return (
    <div className='app'>
      <h1>Pagenation Jaaaa</h1>
      <div className='container'>
        {foodData.map((data,index)=>{
        return <FoodComponent key={index} {...data}/>
      })}
      </div>
      <div className='pagination-container'>
        {dataInPage.map((data,index)=>{
          return(
            <button className={`page-btn ${index === page? "active-btn" : null}`} key={index} onClick={()=>handlePage(index)}>{index+1}</button>
          )
        })}
      </div>
    </div>
  );
}

export default App;
