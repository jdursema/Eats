import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../../Actions';

class LocationForm extends Component {
  constructor() {
    super()
    this.state = {
      location: ''
    };
  }

  handleLocationChange = event => {
    this.setState({location : event.target.value})
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
            onClick={(event)=>{event.preventDefault(), this.props.handleLocation(this.state.location)}}/>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleLocation: location => dispatch(setLocation(location))
});

export default connect(null, mapDispatchToProps)(LocationForm);