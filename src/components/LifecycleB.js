import React, { Component } from 'react'

class LifecycleB extends Component
{
constructor(props) 
{
super(props)

  this.state = {
    name: 'Naveen'     
}
console.log('LifecycleB constructor')
}

static getDerivedStateFromProps(props, state)
{
console.log('LifecycleB getDerivedStateFromProps')
return null
}

componentDidMount()
{
    console.log('LifecycleB componentDidMount')

  }
shouldComponentUpdate() {
  console.log('LifecycleB shouldComponentUpdate')
  return true
}

getSnapshotforeUpdate(prevProps, prevState){
  console.log('LifecycleB getSnapshotBeforeUpdate')
    return null
}

componentDidUpdate(){
  console.log('LifeCycleB componentDidUpdate')
}


  render()
   {
    console.log('Life cycle a rendered')
    return (
      <div >

          LifecycleB  

      </div>
    )
  }
}

export default LifecycleB