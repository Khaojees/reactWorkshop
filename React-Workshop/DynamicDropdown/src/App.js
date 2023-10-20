import './App.css';
import DropdownComponent from './components/Dropdown';
import FoodComponent from './components/FoodComponent';
import {useState} from "react"
import MenuData from './data/MenuData';

function App() {
  const [foods,setFoods] = useState(MenuData)

  const changeFoodData =(e)=>{
    // return console.log(e.target.value)
    const category = e.target.value
    if(category === "all-menu"){
      setFoods(MenuData)
    }else{
      const result = MenuData.filter((element)=>{
        return element.menu === category
      })
      setFoods(result)
    }    
  }

  return (
    <div className="container">
      <DropdownComponent changeFoodData={changeFoodData}/>
      <div className='content'>
        {foods.map((data,index)=>{
          return <FoodComponent key={index} {...data} />
        })}
      </div>
    </div>
  );
}

export default App;
