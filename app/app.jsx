var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

//Load foundation-sites
require('style!css!foundation-sites/dist/css/foundation.min.css')
require('style!css!sass!applicationStyles')

$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Timer}> </IndexRoute>
      <Route path='countdown' component={Countdown}> </Route>
    </Route>
  </Router>,
  document.getElementById('app')
);
