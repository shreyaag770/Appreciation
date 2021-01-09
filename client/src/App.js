import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Highfive from "./Main/Highfivepage";
import Praise from "./Main/praisePage";
import AddUser from "./Main/AddUser";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/praise/:id" component={Praise} />
        <Route exact path="/highfive/:id" component={Highfive} />
        <Route exact path="/AddUser" component={AddUser} />
      </Switch>
    </Router>
  );
};

export default App;
