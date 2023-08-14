import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { randomNumber } from './random'

function App() {
  useEffect(()=>{
    const randomLocation=randomNumber(126);
    axios.get(`https://rickandmortyapi.com/api/location/${randomLocation}`)
    .then(({data})=>console.log(data))
    .catch((err)=> console.log(err))
  },[])
 
  return (
    <>
      
    </>
  )
}

export default App
