import React from 'react';

const Person = (props) => {
    return ( 
        <div>
            <h1>Name: {props.name} Age: {props.age}</h1>
            <p>{props.children}</p>
        </div>
     );
}
 
export default Person;