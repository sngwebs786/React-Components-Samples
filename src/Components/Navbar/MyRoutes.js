import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
const MyRoutes = () => {
    return (
        <Router>
            <Navbar />

            <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                {/* <Route path="/services" element={<Services/>}/> */}
                <Route path="/contact" element={<Contact/>}/>



            </Routes>
        </Router>

    );
};

export default MyRoutes
