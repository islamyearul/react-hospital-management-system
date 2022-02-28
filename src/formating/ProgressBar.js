import React from "react";
const ProgressBar = ({bgcolor,progress,height}) => {
     
    const Parentdiv = {
        height: '25px',
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 0,
        // margin: 50
      }
      
      const Childdiv = {
        height: '25px',
        width: `${progress}%`,
        backgroundColor: bgcolor,
         borderRadius:0,
        textAlign: 'right',
      }
      
      const progresstext = {
        paddingRight: 10,       
        color: 'white',
        fontWeight: 500,
        fontSize: 16
      }
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <div style={progresstext}>{`${progress}%`}</div>
      </div>
    </div>
    )
};

export default ProgressBar;
