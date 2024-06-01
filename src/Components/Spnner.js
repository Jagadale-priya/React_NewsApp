import React, { Component } from 'react'
import  Loading from "./Spinner.gif";

export class Spnner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Loading} alt="" />
      </div>
    )
  }
}

export default Spnner