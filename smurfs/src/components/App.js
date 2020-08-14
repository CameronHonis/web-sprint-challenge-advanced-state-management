import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { LOADING_SMURFS, ADD_SMURFS, ERROR_LOADING_SMURFS } from '../reducers/smurfReducer'
import Smurf from './Smurf'
import SmurfForm from './SmurfForm'
import "./App.css";
const App = () => {
  const state = useSelector(v => v)
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (!state.smurfs.length){
      dispatch({type: LOADING_SMURFS})
      axios.get(`http://localhost:3333/smurfs`)
        .then(res => {
          dispatch({type: ADD_SMURFS, smurfs: res.data})
        })
        .catch(err => {
          dispatch({type: ERROR_LOADING_SMURFS})
        })
    }
  },[])

  return (
    <>
      {state.smurfs.map(v => <Smurf key={v.id} smurf={v} />)}
      {state.loading && <p>Loading smurf data...</p>}
      <p id='error'>{state.error}</p>
      <SmurfForm />
    </>
  );
}

export default App;
