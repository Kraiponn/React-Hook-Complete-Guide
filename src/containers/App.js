import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpits/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxed';
import AuthContext from '../context/auth-context';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] Contructor');
  }

  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps ', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js]  componentDidMount');
  }

  shouldComponentUpdate(prevProps, prevState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
  }

  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    console.log(persons)
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

    // const persons = this.state.persons;
    // persons.splice(personsId, 1);
    // this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  toggleCockpitHandler = () => {
    this.setState({
      showCockpit: !this.state.showCockpit
    });
  }

  loginHandler = () => {
    this.setState({ authenticated: !this.state.authenticated });
  }

  render () {
    console.log('[App.js]  render');
    let persons = null;

    if(this.state.showPersons){
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonsHandler}
          changed={this.nameChangedHandler} />
      //btnClass = classes.Red;
    }

    return (
      <Aux>
        <button
          style={{
            borderRadius: '9px 9px',
            marginTop: '20px',
            padding: '9px 24px'
          }} 
          onClick={this.toggleCockpitHandler}
            >CLick me</button>
        
        <AuthContext.Provider 
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }} >
          {this.state.showCockpit ? 
          <Cockpit 
            title={this.props.addTitle}
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler} />
            : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);