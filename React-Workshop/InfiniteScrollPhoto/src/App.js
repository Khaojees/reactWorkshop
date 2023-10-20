import './App.css';
import PhotoComponent from './components/PhotoComponent';
import {useEffect, useState} from "react"

function App() {
  const apiKey = 'YH3oI4ZnI6-E0ovtzP8ywgc0uGFAvzXXw51Gb2y6NTU'

  const [photo,setPhoto] = useState([])
  const [page,setPage] = useState(1)
  const [isLoading,setIsLoading] = useState(false)

  const fetchImage=async()=>{
    try{
      const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&page=${page}`
      const response = await fetch(apiUrl)
      const data = await response.json()
      setPhoto((oldData)=>{
        return [...oldData,...data]
      })
    }catch(error){
      console.log(error)
    }
    setIsLoading(false)
  }
  useEffect(()=>{
    fetchImage()
  },[page])

  useEffect(()=>{
    const event = window.addEventListener('scroll',()=>{
      if(window.innerHeight+window.scrollY > document.body.offsetHeight-500){
          setPage((oldPage)=>{
            return oldPage+1
          })
      }
    })
    return()=>window.removeEventListener('scroll',event)
  },[])

  return (
    <main>
      <h1>Let's Gogogogogogogogo</h1>
      <section className='photo'>
        <div className='display-photo'>
          {photo.map((data,index)=>{
            return <PhotoComponent key={index} {...data}/>
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
