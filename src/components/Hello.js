import React from 'react'

const Hello = () => {
    // return(
    // <div className='dummyClass'>
    //     <h1>hello Naveen</h1>
    // </div>
    // )
return React.createElement('div',{id:'hello', className:'dummyclass'}, React.createElement('div',null,'Hello Meghas'))

}
export default Hello