import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './NavBar.css';
import { initialLocationFetch, logOut } from '../../Actions';
import PropTypes from 'prop-types';

export class NavBar extends Component {

  async componentDidMount(){ 
    this.props.handleLocation();
  }

  render(){
    return (
      <header>
        <div className='title'>
          <div className='left-nav'>
            <p>Hello! {this.props.user.email}</p>
            <p>Your Location: {this.props.location.name}</p>
          </div>
          <h1>Eats</h1>
          <div className='right-nav'>
            <button 
              className='log-out'
              onClick={this.props.handleLogOut}>
              LogOut
            </button>
          </div>
        </div>
        <div className='nav-bar'>
          <NavLink to='/' className='nav'>
            Home
          </NavLink>
          <NavLink to='/suggestions' className='nav'>
            Places Near You
          </NavLink>
          <NavLink to='/favorites' className='nav'>
            Favorites
          </NavLink>
          <NavLink to='/recommendations' className='nav'>
            Recommendations
          </NavLink>
          <NavLink to='/location' className='nav'>
            Change Location
          </NavLink>
        </div>
      </header> 
    );
  }
}

const mapStateToProps = state => ({
  location: state.location,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  handleLocation: () => dispatch(initialLocationFetch()),
  handleLogOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);


NavBar.propTypes = {
  handleLocation: PropTypes.func,
  location: PropTypes.object,
  user: PropTypes.object,
  handleLogOut: PropTypes.func
};