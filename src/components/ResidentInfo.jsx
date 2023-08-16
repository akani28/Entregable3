import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentInfo = ({residentLocation}) => {
    const [resident, setResident] = useState(null)
    useEffect(()=>{
        axios.get(residentLocation)
        .then(({data})=>setResident(data))
        .catch((err)=>console.log(err))
    },[])
  return (
    <div className='bg-black flex flex-col gap-2 justify-center'>
        <section className='relative'>
            <img src={resident?.image} />
            <article className='absolute bottom-6 left-20'>
                {
                    (resident?.status==="Alive")?(
                        <div className='bg-black bg-opacity-60 border-2 border-green-300  flex gap-2 px-6 py-1'>
                             <span className='bg-green-300 p-3 rounded-full '></span><span>{resident?.status}</span>
                        </div>
                       
                    ):(
                        
                       (resident?.status==="Dead")?(
                        <div className='bg-black bg-opacity-60 border-2 border-green-300  flex gap-2 px-6 py-1'>
                        <span className='bg-red-500  p-3 rounded-full '></span><span>{resident?.status}</span>
                    </div>
                       ):(
                        <div className='bg-black bg-opacity-60 border-2 border-green-300  flex gap-2 px-6 py-1'>
                        <span className='bg-gray-500  p-3 rounded-full '></span><span>{resident?.status}</span>
                    </div>
                       )
                    )
                }
                
            </article>
        </section>
        <div className='bg-black'>
        <section className='flex justify-center'>
            <h2>{resident?.name}</h2>
        </section>
        <section>
            <p>Species: {resident?.species}</p>
            <p>Origin: {resident?.origin.name}</p>
            <p>Times appear: {resident?.episode.length}</p>
        </section>

        </div>
        
    </div>
  )
}

export default ResidentInfo