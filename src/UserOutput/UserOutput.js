import React from 'react';
import './UserOutput.css';

const userOutPut = (props) => {
    return ( 
        <div className="userOutput">
            <h1>{props.userName}</h1>
        </div>
     );
}
 
export default userOutPut;