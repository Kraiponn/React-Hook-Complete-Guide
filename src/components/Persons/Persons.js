import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

    // static getDeriveStateFromProps(props, state){
    //     console.log('[Persons.js] getDeriveStateFromProps' , props);
    //     return state;
    // }

    // componentWillReceiveProps(props){
    //     console.log('[Persons.js] componentWillReceiveProps ', props);
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshortBeforeUpdate');
        return { message: 'Snapshort!' };
    }

    componentDidUpdate(prevProps, prevState, snapshort){
        console.log('[Persons.js] componentDidUpdate');
        console.log('[Persons.js] ', snapshort);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }

    render(){
        console.log('[Persons.js] Rendering...');
        return this.props.persons.map((person, index) => {
            return  (
                <Person 
                    click={() => this.props.clicked(index)}
                    name={person.name} 
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)} />
            );
        });
    }
};
 
export default Persons;