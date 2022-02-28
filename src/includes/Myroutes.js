import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom'
import Contact from '../component/contact/Contact';
import About from '../component/about/About';
import Blog from '../component/blog/Blog';


import Home from '../component/home/Home';
import Doctors from '../component/doctors/Doctors';
import Portfolio from '../component/portfolio/Portfolio';



class Myroutes extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route exact path='/' element={<Home></Home>} ></Route>
                    <Route exact path='/about' element={<About></About>} ></Route>
                    <Route exact path='/blog' element={<Blog></Blog>} ></Route>
                    <Route exact path='/contact' element={<Contact></Contact>} ></Route>
                    <Route exact path='/doctors' element={<Doctors></Doctors>} ></Route>
                    <Route exact path='/portfolio' element={<Portfolio></Portfolio>} ></Route>
                </Routes>
            </>
        );
    }
}

export default Myroutes;