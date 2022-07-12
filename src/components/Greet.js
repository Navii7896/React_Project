import React from 'react'


// function Greet()
// {
// return <h1>Hello Jaideep</h1>
// };

const Greet = props => {  // {}--->desturing inside curly brases.
const {name,nick} = props
return (
<div><h1>hii {name} is a {nick}</h1>

</div>)
}

export default Greet