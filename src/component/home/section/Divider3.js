import React, { Component } from 'react';

class Divider3 extends Component {
    render() {
        return (
            <>
                <section className="divider divider-video over-layer-white" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/6.jpg')` }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <a href="https://youtu.be/vX-lG9nb1fU" data-fancybox-group="gallery" className="lightbox-image" title="lightbox view"><i className="icon icon-Play"></i></a>    
                    </div> 
                </div> 
            </div> 
            </section>
            </>
        );
    }
}

export default Divider3;