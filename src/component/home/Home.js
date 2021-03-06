import React, { Component } from 'react';
import Slider from './section/Slider';
import Divider from './section/Divider';
import Welcome from './section/Welcome';
import ServiceContent from './section/ServiceContent';
import Appointmentsec from './section/Appointmentsec';
import Divider2 from './section/Divider2';
import Portfolio from './section/Portfolio';
import Divider3 from './section/Divider3';
import Department from './section/Department';
import Team from './section/Team';
import Counter from './section/Counter';
import Testimonial from './section/Testimonial';
import Blog from './section/Blog';



class Home extends Component {
    render() {
        return (
            <>
            {/* <!-- Slider start --> */}
             <Slider></Slider>   
           {/* <!-- Slider end --> */}  
            {/* <!-- divider start --> */}
                <Divider></Divider>
            {/* <!-- divider end --> */}
            {/* <!-- welcome start --> */}
                <Welcome></Welcome>
            {/* <!-- welcome end --> */}
            {/* <!-- service start --> */}
                <ServiceContent></ServiceContent>
            {/* <!-- service end --> */}
            {/* <!-- appointment start --> */}
                {/* <Appointmentsec></Appointmentsec> */}
            {/* <!-- appointment end --> */}
            {/* <!-- divider start --> */}
                <Divider2></Divider2>
            {/* <!-- divider end --> */}
            {/* <!-- portfolio start --> */}
                <Portfolio></Portfolio>
            {/* <!-- portfolio end --> */}
            {/* <!-- divider start --> */}
                <Divider3></Divider3>
            {/* <!-- divider end --> */}
            {/* <!-- department start -->     */}
                <Department></Department>
            {/* <!-- department end --> */}
            {/* <!-- Team start --> */}
                <Team></Team>
            {/* <!-- Team end --> */}
            {/* <!-- Counter start --> */}
                <Counter></Counter>
            {/* <!-- Counter end --> */}
            {/* <!-- Testimonial start --> */}
                <Testimonial></Testimonial>
            {/* <!-- Testimonial end --> */}
            {/* <!-- blog start --> */}
                <Blog></Blog>
            {/* <!-- blog end --> */}

            </>
        );
    }
}

export default Home;