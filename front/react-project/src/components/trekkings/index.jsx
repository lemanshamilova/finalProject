import React, { useEffect } from 'react'
import './style.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getAllData } from '../../redux/slices/TrekkingSlice'
import { CiStar } from "react-icons/ci";
import mountains from '../../assets/images/logo-icon.svg'
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import {  Navigation ,Autoplay} from 'swiper/modules';


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
         <Swiper
         breakpoints={{
          400:{slidesPerView:1},
          700:{slidesPerView:2},
          1100:{slidesPerView:3},
          1200:{slidesPerView:4},

         }}

        
        modules={[Navigation,Autoplay]}

         autoplay={{
          delay:1,
          disableOnInteraction:false
         }}
         spaceBetween={30}
         loop={true}

         pagination={{
          clickable:true
         }}
         speed={4000}


         
      
        
        className=" trekkings">
          {
            trekkings.map((p)=>(
              <SwiperSlide className='trekkingsCart' key={p._id}>
                <p className='price'>${p.price}</p>
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
                navigate(`/trekkings/${p._id}`)

               }} className='details'>Təfərrüatlara baxın  <img style={{width:'30px',height:'30px'}} src={mountains}/></p>


              </SwiperSlide>

            ))

          }
         </Swiper>
        </div>

      </div>
        
      
    </section>
  )
}

export default Trekkings
