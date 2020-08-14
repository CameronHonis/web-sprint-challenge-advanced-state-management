
export const LOADING_SMURFS = 'LOADING_SMURFS'
export const ADD_SMURFS = 'ADD_SMURFS'
export const ERROR_LOADING_SMURFS = 'ERROR_LOADING_SMURFS'

const initialState = {
  smurfs: [],
  loading: false,
  error: ''
}

let runningId = 0
export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_SMURFS:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case ADD_SMURFS:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.smurfs.map(v => { return {...v, id: runningId++}})],
        loading: false,
        error: ''
      }
    case ERROR_LOADING_SMURFS:
      return {
        ...state,
        loading: false,
        error: 'could not get smurfs :('
      }
    default:
      return state
  }
}