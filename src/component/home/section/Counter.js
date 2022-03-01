import React, { Component } from 'react';
import CountUp from 'react-countup';
import Style from './Style.css'
import { FaMedkit, FaHeartbeat, FaMedrt, FaHandHoldingMedical } from "react-icons/fa";

class Counter extends Component {
    render() {
        return (
            <>
               <section className="funfact-field over-layer-default" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/6.jpg')` }}>
            <div className="container-fluid">
            
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="counter-col text-center">
                        <h2 className='text-white' ><span >{<FaHeartbeat></FaHeartbeat>}</span></h2>
                            <div className="count">
                                <div className="home-count">
                               <CountUp start={0} end={25} delay={0} >
                                {({ countUpRef }) => (
                                    <div>
                                    <span ref={countUpRef} />
                                    </div>
                                )}
                                </CountUp>
                                
                                </div>
                                <h4>Heart Transplants</h4>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="counter-col text-center">
                        <h2 className='text-white' ><span >{<FaMedrt></FaMedrt>}</span></h2>
                            <div className="count">
                                <div className="home-count">
                                <CountUp start={0} end={258} delay={0} >
                                {({ countUpRef }) => (
                                    <div>
                                    <span ref={countUpRef} />
                                    </div>
                                )}
                                </CountUp>
                                </div>
                                <h4>BARIATRIC SURGERY</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="counter-col text-center">
                        <h2 className='text-white' ><span >{<FaHandHoldingMedical></FaHandHoldingMedical>}</span></h2>
                            <div className="count">
                                <div className="home-count"> 
                                <CountUp start={0} end={5879} delay={0}>
                                {({ countUpRef }) => (
                                    <div>
                                    <span ref={countUpRef} />
                                    </div>
                                )}
                                </CountUp>
                                </div>
                                <h4>CRITICAL CARE</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="counter-col text-center">
                        <h2 className='text-white' ><span >{<FaMedkit></FaMedkit>}</span></h2>
                            <div className="count">
                                <div className="home-count border-none"> 
                                <CountUp start={0} end={100} delay={0} >
                                {({ countUpRef }) => (
                                    <div>
                                    <span ref={countUpRef} />
                                    </div>
                                )}
                                </CountUp>
                                </div>
                                <h4>EXTPART Doctor</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section> 
            </>
        );
    }
}

export default Counter;