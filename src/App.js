import React from "react";
import Home from "./components/pages/Home";
import Navigationbar from "./components/elements/Navigationbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyOrders from "./components/MyOrders";
import Order from "./components/Order";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/myOrders" component={MyOrders} />
          <Route exact path="/myOrders/:id" component={Order} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
