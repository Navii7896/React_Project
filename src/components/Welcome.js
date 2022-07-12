import React, { Component } from 'react'

class Welcome extends Component{
    render()
    {
        const{name,nick} = this.props
        // const{state1,state2}=this.state
    return <h1>welcome{name} is a {nick}</h1>
    }
}

export default Welcome