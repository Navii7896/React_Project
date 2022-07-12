import React, { Component } from 'react'

class UserGreeting extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      isLoggedIn: true
    }
  }
  
  
    render() {

        return this.state.isLoggedIn && <div>Welcome Naveen</div>
          
        //    return this.state.isLoggedIn? (
        //     <div>Welcome Naveen</div>):(
        //     <div>Welcome Guest</div>)
            }


        // let message 
        // if(this.state.isLoggedIn){
        //     message=<div>Welcome Naveen</div>
        // }else{
        //     message=<div>Welcome Guest</div>
        // }

        // return <div>{message}</div>
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>welcome Naveen</div>
        //     )
        // }else{
        //     return(

        //         <div>
        //               welcome Guest

        //         </div>
        //     )
        // }
    
    // return (
    //   <div>

    //         <div>Welcome Naveen</div> 
    //         <div>Welcome Guest</div> 


    //   </div>
    // )
  }


export default UserGreeting