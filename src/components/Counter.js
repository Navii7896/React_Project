import React, { Component } from 'react'



 class Counter extends Component {

constructor(props){
    super(props)

    this.state = {
count: 0
    }
}
  increment()
  {
    // this.setState({
    //     count: this.state.count + 1 // it is 1st parameter and its an object set the state value.
    // },
    // () => {
    //     console.log('callback value',this.state.count)//2nd parameter arrow function updated state.count value.
    // }
    // )
    this.setState((prevstate,props) => ({
        count: prevstate.count + 1
    }))
      console.log(this.state.count)
  }

  incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }
    
  render() {
    return (<div>  <div>Count - {this.state.count}</div>
    <button onClick={() => this.incrementFive()}>Increment</button>
    </div>
    )
    
  }
}

export default Counter