import React, { useEffect } from 'react'
import './style.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getAllData } from '../../redux/slices/TrekkingSlice'
import { CiStar } from "react-icons/ci";
import mountains from '../../assets/images/logo-icon.svg'
import { useNavigate } from 'react-router-dom';



const Trekkings = () => {
  const trekkings = useSelector((state) => state.trekkings.trekkings)
  const dispatch = useDispatch()
  const navigate=useNavigate()

  useEffect(() => {
   dispatch(getAllData())
  }, [])
  
  return (
    <section className='trekking'>
      <div className="container">
        <div className="trekkingWrap">
         <div className='text'>
         <h1>Müasir Və Gözəl</h1>
          <h2>Ən Populyar Trekkingimiz</h2>
         </div>
         <div className='trekkings'>
          {
            trekkings.map((p)=>(
              <div className='trekkingsCart' key={p._id}>
                <p className='price'>{p.price} dollar</p>
                <img src={p.image} />
                <p className='title'>{p.title}</p>
               <div className='starts'>
               <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
               </div>
               <div>
                <p className='desc'>{p.description}</p>
               </div>
               <hr className='hr'/>

               <p onClick={(e)=>{
                e.preventDefault()
                navigate(`${p._id}`)

               }} className='details'>Təfərrüatlara baxın  <img style={{width:'30px',height:'30px'}} src={mountains}/></p>


              </div>

            ))

          }
         </div>
        </div>

      </div>
        
      
    </section>
  )
}

export default Trekkings
