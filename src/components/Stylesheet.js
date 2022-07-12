import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let classname =props.primary ? 'primary' : ''
  return (
    <div>
<h2 className={`${classname} font-xl`}>Stylesheets</h2>

    </div>
  )
}

export default Stylesheet