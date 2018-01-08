import React from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';
import Recommendations from '../Recomendations/Recomendations';
import LocationForm from '../LocationForm/LocationForm';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import PlacesNearYou from '../PlacesNearYou/PlacesNearYou';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/favorites' component={FavoritesContainer}/>
        <Route path='/recommendations' component={Recommendations}/>
        <Route path='/location' component={LocationForm}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/suggestions' component= {PlacesNearYou} />
      </div>
    </div>
  );
};

export default App;
