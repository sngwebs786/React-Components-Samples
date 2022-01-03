import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './MyNavbar.css';

const Navbar = () => {

    const[isMobile,setIsMobile]=useState(false);

    return (
        <nav className="navbar">
            <h3 className="navbar-logo">
                LOGO
            </h3>
            <ul className={isMobile ? "navbar-links-mobile" : "navbar-links"} 
            onClick={()=>setIsMobile(false)}>
                <Link to="/" className='home'>
                    <li>Home </li>
                </Link>

                <Link to="/about" className='about'>
                    <li> About </li>
                </Link>

                <Link to="" className='services'>
                    <li>Services</li>
                </Link>
                {/* <Link to="/services" className='service'>
                    <li>Service </li>
                </Link> */}
                <Link to="/contact" className='contact'>
                    <li> Contact </li>
                </Link>

                <Link to="/" className='sign-up'>
                    <li> Sign Up </li>
                </Link>

                    </ul>

                <button className="mobile-menu-icon" onClick={()=>setIsMobile(!isMobile)}>
                    {
                        isMobile ? (
                            <i className='fas fa-times'></i>
                        ) : (
                            <i className="fas fa-bars"></i>
                        )
                    }

                </button>


        </nav>
    )
}

export default Navbar;