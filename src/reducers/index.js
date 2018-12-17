import { combineReducers } from 'redux'

import clothes from './clothes'
import cart from './cart'
import sort from './sort'

export default combineReducers({
  clothes,
  cart,
  sort
})
