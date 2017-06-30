import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Hexagon from './views/Result';

const routes = [
  { path: '/', component: Hexagon, name: 'hexagon' },
];

class Router extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          { routes.map( (route, index) => <Route key={`${index}`} {...route} /> ) }
        </Switch>
      </BrowserRouter>
    )
  }
}

const Root = () => <Router/>;

export default Root;