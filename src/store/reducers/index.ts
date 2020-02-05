import { combineReducers } from 'redux'

import posts from './posts'
import post from './post'
import ui from './ui'

export default combineReducers({
  posts,
  post,
  ui,
})
