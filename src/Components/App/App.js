import React from 'react';
import './App.css';
import NavBar from '../../Containers/NavBar/NavBar';
import FavoritesContainer from '../../Containers/FavoritesContainer/FavoritesContainer';
import Recommendations from '../../Containers/Recomendations/Recomendations';
import LocationForm from '../../Containers/LocationForm/LocationForm';
import { Route } from 'react-router-dom';
import Home from '../../Containers/Home/Home';
import Login from '../../Containers/Login/Login';
import SignUp from '../../Containers/SignUp/SignUp';
import PlacesNearYou from '../../Containers/PlacesNearYou/PlacesNearYou';

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
