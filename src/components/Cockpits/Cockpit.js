import React, { useEffect, useRef } from 'react';
import style from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    const toggleButtonRef = useRef(null);

    useEffect(() => {
        toggleButtonRef.current.click();
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
                ref={toggleButtonRef}
                onClick={props.clicked}>Toggle Persons</button>
            <AuthContext.Consumer>
                {
                    context => 
                        <button onClick={context.login}>Login</button>
                }
            </AuthContext.Consumer>
        </div>
    );
}
 
export default React.memo(Cockpit);