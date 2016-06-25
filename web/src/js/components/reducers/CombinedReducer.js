import { combineReducers } from 'redux'
import AddFileReducer from './AddFileReducer'

export default combineReducers({
    newFile: AddFileReducer
})