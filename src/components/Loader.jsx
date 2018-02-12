import React, { Component } from 'react';

var pulse = require('halogen/PulseLoader');

class Loader extends Component {

  render(){
    return(
      <pulse color="#26A65B" size="16px" margin="4px"/>
    )
  }
}

export default Loader