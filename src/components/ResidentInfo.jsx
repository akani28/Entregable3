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
    <div className='max-w-[290px] flex flex-col justify-center border-double border-2 border-green-400'>
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
        <div className='bg-black bg-opacity-20 text-xs'>
        <section className='flex justify-center pt-3'>
            <h2>{resident?.name}</h2>
        </section>
        <section className='flex gap-3 p-2 m-2'>
            <div className='flex justify-start flex-col'>
                <p>Species</p>
                <p>Origin</p>
                <p>Times apper</p>
            </div>
            <div className='flex justify-start flex-col'>
            <p className='text-[#DCDCDC]'>{resident?.species}</p>
            <p>{resident?.origin.name}</p>
            <p>{resident?.episode.length} time</p>

            </div>
            
        </section>

        </div>
        
    </div>
  )
}

export default ResidentInfo