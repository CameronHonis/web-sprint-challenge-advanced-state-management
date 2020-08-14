import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_SMURFS } from '../reducers/smurfReducer'

const initialState = {
  name: '',
  age: '',
  height: '',
}

const SmurfForm = props => {
  const [ formState, setFormState ] = useState(initialState)

  const dispatch = useDispatch()

  const onClick = e => {
    e.preventDefault()
    //validate
    dispatch({type: ADD_SMURFS, smurfs: [formState]})
  }

  return(
    <form onSubmit={e => e.preventDefault()}>
      <input 
        name='name'
        placeholder='name'
        type='text'
        value={formState.name}
        onChange={e => setFormState({...formState, name: e.target.value})}
      ></input>
      <input
        name='age'
        placeholder='age'
        type='text'
        value={formState.age}
        onChange={e => setFormState({...formState, age: e.target.value})}
      ></input>
      <input
        name='height'
        placeholder='height'
        type='text'
        value={formState.height}
        onChange={e => setFormState({...formState, height: e.target.value})}
      ></input>
      <button onClick={e => onClick(e)}>Add smurf</button>
    </form>
  )
}

export default SmurfForm