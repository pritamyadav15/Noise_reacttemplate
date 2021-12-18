import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
             <nav className="navbar">
                <h1>
                  <Link to="/">noise</Link>  
                </h1>
                <div className="link">
                    <Link to="/products" > Products</Link>
                    <Link to="/support" >Support</Link>
                    <Link to="/stories" >Stories</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar