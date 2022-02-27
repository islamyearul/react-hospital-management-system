import React, { Component } from 'react';

class Blog extends Component {
    render() {
        return (
            <>
               <section className="blog-area bg-f8">
            <div className="container">
                <div className="section-title">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <h2>Latest <span className="color-defult">news</span></h2>
                            <div className="line-border-center bg-defult"></div>
                            <p>Repellendus error placeat numquam doloribus perferendis consequatur maxime molestiae soluta Corporis quidem quaerat accusantium omnis repudiandae nulla recusandae</p>
                        </div>
                    </div>
                </div>
                <div className="section-content">
                    <div className="row">
                        <div className="blog-feature">
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="blog-item style-1">
                                    <div className="blog-date text-center">
                                        <i className="pe-7s-link"></i>
                                    </div>
                                    <div className="blog-img"><a href="#"><img src="img/blog/1.jpg" alt="" /></a>
                                        <div className="blog-event-date">
                                            <h3>13 <small>Jun</small></h3>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <a href="#"><h4>What's the Right Choice? </h4></a>
                                        <i className="fa fa-user-o"></i> <a href="#">Admin</a> | <i className="fa fa-heart-o"></i> <a href="#">Like :20 </a> | <i className="fa fa-comment-o"></i><a href="#"> Comments: 10</a>
                                        <p>come from a family of doctors and I was suffering from morbid obesity with co-morbidities like diabetes, hypertension, and sleep apnoea.</p>
                                        <a href="#" className="btn btn-simple">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="blog-item style-1">
                                    <div className="blog-date text-center">
                                        <i className="pe-7s-link"></i>
                                    </div>
                                    <div className="blog-img"><a href="#"><img src="img/blog/2.jpg" alt="" /></a>
                                        <div className="blog-event-date">
                                            <h3>17 <small>Jun</small></h3>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <a href="#"><h4>Caregiver Series </h4></a>
                                        <i className="fa fa-user-o"></i> <a href="#">Admin</a> | <i className="fa fa-heart-o"></i> <a href="#">Like :20 </a> | <i className="fa fa-comment-o"></i><a href="#"> Comments: 10</a>
                                        <p>come from a family of doctors and I was suffering from morbid obesity with co-morbidities like diabetes, hypertension, and sleep apnoea.</p>
                                        <a href="#" className="btn btn-simple">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12 center-block">
                                <div className="blog-item style-1">
                                    <div className="blog-date text-center">
                                        <i className="pe-7s-link"></i>
                                    </div>
                                    <div className="blog-img"><a href="#"><img src="img/blog/3.jpg" alt="" /></a>
                                        <div className="blog-event-date">
                                            <h3>19 <small>Jun</small></h3>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <a href="#"><h4>Little Hats, Big Hearts </h4></a>
                                        <i className="fa fa-user-o"></i> <a href="#">Admin</a> | <i className="fa fa-heart-o"></i> <a href="#">Like :20 </a> | <i className="fa fa-comment-o"></i><a href="#"> Comments: 10</a>
                                        <p>come from a family of doctors and I was suffering from morbid obesity with co-morbidities like diabetes, hypertension, and sleep apnoea.</p>
                                        <a href="#" className="btn btn-simple">Read More</a>
                                    </div>
                                </div>
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

export default Blog;