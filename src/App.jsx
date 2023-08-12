import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  useEffect(()=>{
    axios.get("https://rickandmortyapi.com/api/location/4")
    .then(({data})=>console.log(data))
    .catch((err)=> console.log(err))
  },[])
 
  return (
    <>
      
    </>
  )
}

export default App
