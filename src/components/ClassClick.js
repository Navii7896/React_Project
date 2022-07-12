import React, { Component } from 'react'

export class ClassClick extends Component {
 
 clickHandler(){
  console.log('clickedme')
 }
 
 
  render() {
    return (
      <div>

<button onClick={this.clickHandler}>Clickme</button>

      </div>
    )
  }
}

export default ClassClick