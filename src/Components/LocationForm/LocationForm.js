import React, { Component } from 'react';

class LocationForm extends Component {
  constructor(){
    super()
    this.state ={
      location: '',
    }
  }

  handleLocationChange = event => {
    this.setState({location : event.target.value})
  }


  render() {
    return (
      <div>
        <h3>Where are you looking to eat?</h3>
        <form>
          <input type='text' onChange={this.handleLocationChange} value={this.state.location}/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default  LocationForm;