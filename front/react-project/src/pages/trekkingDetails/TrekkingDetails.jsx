import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './style.scss'
const TrekkingDetails = () => {
    const {trekkingId}=useParams()
    const [trekking, setTrekking] = useState([]);

    const getProduct=async()=>{
      const res=await axios(`http://localhost:5050/trekkings/${trekkingId}`)
      setTrekking(res.data)
    }
    useEffect(() => {
      getProduct()
     
    }, []);
  return (
    <section >
              
        <div className="container">
          <img src={trekking.image} className='trekkingImg' />
           <h1>{trekking.title}</h1>
        </div>
      
    </section>
  )
}

export default TrekkingDetails
