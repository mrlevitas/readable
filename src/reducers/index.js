import { combineReducers } from 'redux'
import post from './post'
import comment from './comment'
import currentPost from './currentPost'
import selectedPost from './selectedPost'
import selectedComment from './selectedComment'
import { reducer as formReducer } from 'redux-form'
import { ADD_POST_REQUEST_SUCCESS } from '../actions/addPost';

export default combineReducers({
  form: formReducer.plugin({
     post: (state, action) => {
       switch(action.type) {
         case ADD_POST_REQUEST_SUCCESS:
           return undefined;
         default:
           return state;
       }
     },

  }),
  post,
  comment,
  currentPost,
  selectedPost,
  selectedComment
})

//  comment: (state, action) => {
//    switch(action.type) {
//      case ADD_COMMENT_REQUEST_SUCCESS:
//        return undefined;
//      default:
//        return state;
//    }
//  }
