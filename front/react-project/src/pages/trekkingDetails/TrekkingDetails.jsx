import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const TrekkingDetails = () => {
    const {trekkingId}=useParams()
    const [trekking, setTrekking] = useState([]);

    const getProduct=async()=>{
      const res=await axios("http://localhost:5050/trekkings/"+trekkingId)
      setTrekking(res.data)
    }
    useEffect(() => {
      getProduct()
     
    }, []);
  return (
    <section>
        <div className="container">
            <div>
                {trekking.map((p)=>(
                   <div>
                     <img src={p.image}/>
                    <p>{p.title}</p>
                   </div>
                ))}
            </div>
        </div>
      
    </section>
  )
}

export default TrekkingDetails
