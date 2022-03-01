import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom'
import Contact from '../component/contact/Contact';
import Appointment from '../component/appointment/Appointment';
import Blog from '../component/blog/Blog';
import Ourservice from '../component/ourservice/Ourservice'

import Home from '../component/home/Home';
import Doctors from '../component/doctors/Doctors';
import Portfolio from '../component/portfolio/Portfolio';



class Myroutes extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route exact path='/' element={<Home></Home>} ></Route>
                    <Route exact path='/appointment' element={<Appointment></Appointment>} ></Route>
                    <Route exact path='/blog' element={<Blog></Blog>} ></Route>
                    <Route exact path='/contact' element={<Contact></Contact>} ></Route>
                    <Route exact path='/doctors' element={<Doctors></Doctors>} ></Route>
                    <Route exact path='/portfolio' element={<Portfolio></Portfolio>} ></Route>                  
                    <Route exact path='/ourservice' element={<Ourservice></Ourservice>} ></Route>                  
                </Routes>
            </>
        );
    }
}

export default Myroutes;