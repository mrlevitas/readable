import { combineReducers } from 'redux'
import post from './posts'
import comment from './comments'
import currentPost from './currentPost'

export default combineReducers({
  post,
  comment,
  currentPost,

})
