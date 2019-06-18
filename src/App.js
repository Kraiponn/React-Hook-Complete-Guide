import React, { useState } from 'react';
import './App.css';
import Person from './Persons/person';


const App = props => {

  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'kraipon', age: 33 },
      { name: 'sawitree', age: 32 }
    ]
  });

  const [ otherState, setOtherState ] = useState('Some other valueKS');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    console.log('OK Good you clicked me.');
    setPersonsState({
      persons: [
        { name: 'kraipon', age: 32 },
        { name: 'sawitree', age: 32 }
      ]
    });

    setOtherState('I am useState');
  };

    return (
      <div className="App">
        <Person 
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}>Husband</Person>
        <Person 
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}>Wife</Person>
        <button onClick={switchNameHandler}>Clicked me</button>
      </div>
    );
}
 
export default App;
