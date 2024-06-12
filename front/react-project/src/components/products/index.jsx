import React, { useEffect } from 'react'
import './style.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllProducts } from '../../redux/slices/ProductSlice'
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Products = () => {
    const products = useSelector((state) => state.products.products)
    const dispatch = useDispatch()
    const navigate=useNavigate()


  
    useEffect(() => {
     dispatch(getAllProducts())
    }, [])
  return (
    <section>
        <div className="container">
            <div className="productsBox">
                <div className="top">
                    <h1>İndi Alış-Veriş Edin</h1>
                    <h2>Seçilmiş Trekking Məhsulları</h2>
                    <div className="products">
                        {products.slice(0,8).map((p)=>(
                            <div className='product' key={p._id}>

                                <img src={p.image}/>
                                <p className='title'>{p.title}</p>
                                <p className='productPrice'>${p.price}.00</p>
                                <div className='icon'>
                                <MdFavoriteBorder />
                                <AiOutlineShoppingCart />


                                </div>
                                <button className='detail'onClick={()=>{
                                    
                                    navigate(`/products/${p._id}`)

                                }}>
                                    View Detail
                                </button>
                               


                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Products
