import React, { Component } from 'react';
import ServiceContent from '../home/section/ServiceContent';
import CommingSoon from '../appointment/CommingSoon'
class Ourservice extends Component {

    render() {
        return (
            <>
                <CommingSoon></CommingSoon>
                <ServiceContent></ServiceContent>
            </>
        );
    }
}

export default Ourservice;