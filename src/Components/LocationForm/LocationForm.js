import React, { Component } from 'react';

class LocationForm extends Component {
  constructor(){
    super()
    this.state ={
      location: '',
    }
  }
  render() {
    return (
      <div>
        <h3>Where are you looking to eat?</h3>
        <form>
          <input type='text'/>
          <input type='submit'/>
        </form>
        
      </div>
    )
  }
}

export default  LocationForm;