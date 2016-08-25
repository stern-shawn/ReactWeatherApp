var React = require('react')
var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var hashHistory = ReactRouter.hashHistory
var IndexRoute = ReactRouter.IndexRoute
var main = require('../main')
var home = require('../home')

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={main}>
      <IndexRoute component={home} />
    </Route>
  </Router>
)

module.exports = routes
