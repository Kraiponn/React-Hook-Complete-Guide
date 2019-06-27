import React, { useEffect } from 'react';
import style from './Cockpit.module.css';

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // setTimeout(() => {
        //     alert('useEffect is timeout.');
        // }, 1000);
        return () => {
            console.log('[Cockpit.js] Cleanup working an effect1');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect2');
        return () => {
            console.log('[Cockpit.js] Cleanup working an effect2')
        }
    }, []);

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = style.Red;
    }

    if ( props.persons.length <= 2 ) {
        assignedClasses.push( style.red ); // style = ['red']
    }
    if ( props.persons.length <= 1 ) {
        assignedClasses.push( style.bold ); // classes = ['red', 'bold']
    }

    return ( 
        <div className={style.Cockpit}>
            <h1>{props.title}</h1>
            <p 
              className={assignedClasses.join( ' ' )}>
                This is real working
            </p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}
 
export default React.memo(Cockpit);