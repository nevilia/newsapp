import React, { Component } from 'react'
import loading1 from './loading1.gif'
export default class Loading extends Component {
  render() {
    return (
        <div className='text-center'>
            <img src={loading1} alt="loading" />
        </div>
    )
  }
}
