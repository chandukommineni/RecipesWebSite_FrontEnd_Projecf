import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
     <div className="container-flex">
        <div className="row">
            <div className="col-sm-7 logo">
             <p>MyF<span>oo</span>dRecipe</p>
            </div>
            <div className="col-sm-5 nav-links">
               <ul>
                <li><Link  className="link" to="./">Home</Link></li>
                <li><Link  className="link" to='./About'>AboutUS</Link></li>
               </ul>
            </div>
        </div>
     </div>
  )
}

export default Navbar