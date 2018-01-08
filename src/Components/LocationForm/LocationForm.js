import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLocation } from '../../Actions';
import PropTypes from 'prop-types';

class LocationForm extends Component {
  constructor() {
    super();
    this.state = {
      location: ''
    };
  }

  handleLocationChange = event => {
    this.setState({location : event.target.value});
  }


  render() {
    return (
      <div>
        <h3>Where are you looking to eat?</h3>
        <form>
          <input 
            type='text' 
            onChange={this.handleLocationChange} 
            value={this.state.location}/>
          <input 
            type='submit' 
            onClick={(event)=>{
              event.preventDefault(),
              this.props.handleLocation(this.state.location, this.props.favorites, this.props.cuisine);
            }}/>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleLocation: (location, favsArray, cuisineArray) => dispatch(getLocation(location, favsArray, cuisineArray))
});

const mapStateToProps = state => ({
  favorites: state.favorites,
  cuisine: state.cuisine

})

export default connect(mapStateToProps, mapDispatchToProps)(LocationForm);


LocationForm.propTypes = {
  handleLocation: PropTypes.func
};