import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
  constructor() {
    super()
    this.state = {
      personas: [],
      searchfiled: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => {this.setState({personas: user})});
  }

  lookingFor = (event) => {
    this.setState({ searchfiled: event.target.value })
  }

  render() {
    const { personas, searchfiled} = this.state
    const filteredPersonas = personas.filter(personas => {
      return personas.name.toLowerCase().includes(searchfiled.toLowerCase())
    });
    return !personas.length ?
    <h1 className='tc red grow pv7'> . . . L O A D I N G . . . </h1> :
    (
      <div className='tc'>
        <div style={{minHeight: '150px'}}>
          <h1 className='f1'>Identikit</h1>
          <SearchBox filterFor= {this.lookingFor}/>
        </div>
        <Scroll>
          <ErrorBoundary>
            <CardList personas={filteredPersonas}/>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;