import React from 'react'
import { Link } from 'react-router-dom'

const Smurf = props => {

  return(
    <div className='smurf'>
      <h2>{props.smurf.name}</h2>
      <h3>age: {props.smurf.age}</h3>
      <h3>height: {props.smurf.height}</h3>
      <Link to={`/profile/${props.smurf.id}`} >Profile</Link>
      {/* <p>id: {props.smurf.id}</p> */}
    </div>
  )
}

export default Smurf