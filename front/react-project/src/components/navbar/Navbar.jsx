import React from 'react'
import './Navbar.scss'
import logo from "../../assets/images/logo.svg"
import { NavLink } from 'react-router-dom'
import { IoMdHeartEmpty } from "react-icons/io";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Navbar = () => {
  return (
    <header className='navigation'>
      <div className="navbar">
      <div className="container">
        <div className="nav">
           <div> <img src={logo} /></div>
           <ul>
            <li>
                <NavLink to='/' style={({isActive})=>({
                  color: isActive ? '#1dc5ce' : 'black'
                })} >HOME</NavLink>
            </li>
            <li>
                <NavLink to={"/about"}  style={({isActive})=>({
                  color: isActive ? '#1dc5ce' : 'black'
                })}>ABOUT US</NavLink>
            </li>
            <li>
                <NavLink to='/products'  style={({isActive})=>({
                  color: isActive ? '#1dc5ce' : 'black'
                })} >SHOP</NavLink>
            </li>
            <li>
                <NavLink to={"/destination"}  style={({isActive})=>({
                  color: isActive ? '#1dc5ce' : 'black'
                })}>DESTINATIONS</NavLink>
            </li>
            <li>
                <NavLink  to='/trekkings'  style={({isActive})=>({
                  color: isActive ? '#1dc5ce' : 'black'
                })}>TREKKING</NavLink>
            </li>
            <li>
                <NavLink to={"/news"}  style={({isActive})=>({
                  color: isActive ? '#1dc5ce' : 'black'
                })} >NEWS</NavLink>
            </li>
            <li>
                <NavLink to={"/contact"} style={({isActive})=>({
                  color: isActive ? '#1dc5ce' : 'black'
                })}>CONTACT</NavLink>
            </li>
            
           </ul>
           <div className="icons">
           <HiMiniMagnifyingGlass className='search' />
           <IoMdHeartEmpty className='wish'/>
           <AiOutlineShoppingCart />
           <p className='count'>2</p>



           </div>

        </div>
        
      </div>
      </div>

      
    </header>
  )
}

export default Navbar
