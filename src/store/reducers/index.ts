import { combineReducers } from 'redux'

import posts from './posts'
import post from './post'
import ui from './ui'
import comments from './comments'
import users from './users'

export default combineReducers({
  posts,
  post,
  ui,
  comments,
  users,
})
