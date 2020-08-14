import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SmurfProfile = props => {
  const params = useParams()
  const history = useHistory()
  const smurf = useSelector(state => {
    for (let i in state.smurfs){
      if (state.smurfs[i].id === Number(params.smurfId)){
        return state.smurfs[i]
      }
    }
    // state.smurfs.forEach(v => {
    //   console.log(v)
    //   if (v.id === Number(params.smurfId)){
    //     console.log(v.name)
    //     return v
    //   }
    // })
  })
  if (!smurf?.name){
    history.goBack()
  }
  return(
    <>
      <h1>{smurf?.name}'s Profile</h1>
      <button onClick={e => history.goBack()}>Back</button>
    </>
  )
}

export default SmurfProfile