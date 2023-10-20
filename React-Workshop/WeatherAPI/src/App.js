import './App.css';
import {useEffect, useState} from "react"

function App() {
  // const kaojees = "c8f75b1d7e330566b9c5014c188029b0"                
  const [city,setCity] = useState({})
  const [isLaoding,setIsLoading] = useState(false)

  useEffect(()=>{
    const name ="Bangkok"
    const apikey = "15a662ff61edfdd247d28cbec929ad15"  
    const url =`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apikey}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
      setIsLoading(true)
      setCity(data)
    })
  },[])

  const convertTemp=(k)=>{
    return (k-273).toFixed()
  }
  return (
  (isLaoding && <div className="App">
        <section>
            <div className="location">
              <h1 className="city">{city.name}</h1>
              <p className='state'>{city.sys.country}</p>
            </div>
            <div className="card">
              <div className="weather">
                <h1>{convertTemp(city.main.temp)}&deg;C</h1>
                <small>Min : {convertTemp(city.main.temp_min)}&deg;C , Max : {convertTemp(city.main.temp_max)}&deg;C</small>
              </div>
              <div className="info">
                <div className="status">{city.weather[0].main}</div>
                <div className="humidity">Humidity : {city.main.humidity}</div>
                <div className="wind">Wind speed : {city.wind.speed}</div>
              </div>
            </div>
      </section>
      </div>)   
  );
}

export default App;
