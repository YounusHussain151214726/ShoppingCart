import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector  } from 'react-redux'

import {BsFillBagPlusFill } from "react-icons/bs";


const Navbar = () => {

const {totalQuantity} = useSelector(state => state.cartReducer )
  return (
        <div className="navbar">
            

            <div className="containner">
            
            <div className="navbarContainner">
            

            <div className="navbarRight">
                <Link to="/Header">
            <img src="/images/logo.jpg"  alt="logo"></img>
            </Link>
            </div>
            <div className="navbarLeft">
            
                    <div className="carticon">
                    <Link to ="/Cart" >
                    <BsFillBagPlusFill className="basket" />
                    <span>{totalQuantity}</span>
                    </Link>
                        </div>
     
            </div>
            </div>
            </div>
        </div>
    )
}

export default Navbar
