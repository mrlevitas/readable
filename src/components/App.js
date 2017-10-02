import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Route, Switch, Redirect} from 'react-router-dom'
import PostsIndex from '../containers/PostsIndex'
import PostShow from '../containers/PostShow'
import { withRouter } from 'react-router-dom'

const App = ({ params }) => {

    return (
      <div>
        <Link to="/posts">Home</Link>
        <Switch>
          <Route exact path='/posts' component={PostsIndex}/>
          <Route path="/posts/:id" component={PostShow}/>
        <Redirect from="/" to="/posts" />
        </Switch>
      </div>
    )

}

export default withRouter(connect()(App))
