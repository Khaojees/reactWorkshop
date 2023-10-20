import './App.css';
import {useState,useEffect} from "react"

function App() {

  const [countries,setCountries] = useState([])
  const [word,setWord] = useState("")
  const [dataFilter] = useState(["name","capital"])

  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data=>{
      setCountries(data)
      // console.log(countries)
    })
  },[])

  // for old version
  // const searchCountries=(countries)=>{
  //   return countries.filter((item)=>{
  //     return dataFilter.some((filter)=>{
  //       return item[filter].toString().toLowerCase().indexOf(word.toLowerCase)>-1
  //     })
  //   })
  // }

  const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

  const searchCountries = (countries) => {
    return countries.filter((item) => {
      return dataFilter.some((filter) => {
        console.log(item[filter])
        if (item[filter]) {
          if (filter === "name") {
            return (
              item[filter].common
                .toString()
                .toLowerCase()
                .indexOf(word.toLowerCase()) > -1
            );
          } else {
            return (
              item[filter]
                .toString()
                .toLowerCase()
                .indexOf(word.toLowerCase()) > -1
            );
          }
        }
      });
    });
  };

  return (
    <div className="container">
      <div className='search-container'>
        <label htmlFor="search-form">
          <input type="text" 
          className='search-input' 
          placeholder='Search Something....'
          value={word}
          onChange={(e)=>setWord(e.target.value)}
          />
        </label>
      </div>
      <ul className="row">
      {searchCountries(countries).map((item,index)=>{
      // {countries.map((item,index)=>{
        return (
          <li key={index}>
            <div className="card"> 
              <div className='card-title'>
                <img src={item.flags.svg} alt={item.name.common}/>     
              </div>
              <div className='card-body'>
                <div className='card-description'>
                  <h2>{item.name.common}</h2>
                  <ol className='card-list'>
                    <li><span>Population : {formatNumber(item.population)}</span></li>
                    <li><span>Region : {item.region}</span></li>
                    <li><span>Capital : {item.capital}</span></li>
                  </ol>
                </div>
              </div>
            </div>  
          </li>        
        )
      })}
      </ul>
    </div>
  );
}

export default App;
