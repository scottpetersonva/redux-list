import { combineReducers } from 'redux'
import searchTerms from './searchTerms'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  searchTerms,
  visibilityFilter
})
