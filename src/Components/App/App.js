import React, { Component } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';
import RecomendationsContainer from '../RecomendationsContainer/RecomendationsContainer';
import LocationForm from '../LocationForm/LocationForm';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/favorites' component={FavoritesContainer}/>
          <Route path='/recomendations' component={RecomendationsContainer}/>
          <Route path='/location' component={LocationForm}/>
        </div>
      </div>
    );
  }
}

export default App;
