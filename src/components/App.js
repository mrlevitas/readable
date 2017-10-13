import React from 'react'
import { connect } from 'react-redux'
import { NavLink, Route, Switch, Redirect} from 'react-router-dom'
import PostsIndex from '../containers/PostsIndex'
import PostShow from '../containers/PostShow'
import CategoryShow from '../containers/CategoryShow'
import { withRouter } from 'react-router-dom'

const App = ({ params }) => {
    return (
      <div>
        <NavLink to="/posts">Home</NavLink>
        <ul className='subheader'>
            <li>
                <NavLink to="/category/react" activeClassName='selected'>React</NavLink>
            </li>
            <li>
                <NavLink to="/category/redux" activeClassName='selected'>Redux</NavLink>
            </li>
            <li>
                <NavLink to="/category/udacity" activeClassName='selected'>Udacity</NavLink>
            </li>
        </ul>
        <Switch>
          <Route exact path='/posts' component={PostsIndex}/>
          <Route path="/posts/:id" component={PostShow}/>
          <Route path="/category/react" render={()=><CategoryShow category="react"/>}/>
          <Route path="/category/redux" render={()=><CategoryShow category="redux"/>}/>
          <Route path="/category/udacity" render={()=><CategoryShow category="udacity"/>}/>
        <Redirect from="/" to="/posts" />
        </Switch>
      </div>
    )

}

export default withRouter(connect()(App))
