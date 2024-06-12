import React from 'react'
import './Navbar.scss'
import logo from "../../assets/images/logo.svg"
import { NavLink } from 'react-router-dom'
import { IoMdHeartEmpty } from "react-icons/io";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  return (
    <header className='navigation'>
      <div className="navbar">
      <div className="container">
        <div className="nav">
           <div> <img src={logo} /></div>
           <ul>
            <li>
                <NavLink to={'/'}>HOME</NavLink>
            </li>
            <li>
                <NavLink >ABOUT US</NavLink>
            </li>
            <li>
                <NavLink to={'/products'}>SHOP</NavLink>
            </li>
            <li>
                <NavLink >DESTINATIONS</NavLink>
            </li>
            <li>
                <NavLink  to={'/trekkings'}>TREKKING</NavLink>
            </li>
            <li>
                <NavLink >PAGES</NavLink>
            </li>
            <li>
                <NavLink >NEWS</NavLink>
            </li>
            <li>
                <NavLink >CONTACT</NavLink>
            </li>
            
           </ul>
           <div className="icons">
           <HiMiniMagnifyingGlass className='search' />
           <IoMdHeartEmpty className='wish'/>
           <AiOutlineShoppingCart />
           <p className='count'>2</p>
           <RxHamburgerMenu className='menu'/>



           </div>

        </div>
        
      </div>
      </div>

      
    </header>
  )
}

export default Navbar
