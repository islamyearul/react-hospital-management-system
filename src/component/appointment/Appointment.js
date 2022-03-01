
import React, { Component } from 'react';
import Appointmentsec from '../home/section/Appointmentsec'
import CommingSoon from './CommingSoon';

class Appointment extends Component {
    
    render() {
        return (
            <>

               
                <CommingSoon></CommingSoon>
                <Appointmentsec></Appointmentsec>
            </>
        );
    }
}

export default Appointment;