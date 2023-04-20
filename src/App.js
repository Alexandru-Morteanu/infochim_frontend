import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Test from "./pages/Test_Rotation";
import Lab from "./pages/Lab";
import Main from "./pages/Main";
const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <Router>
        <Switch>
          <Route path="/test" component={Test} />
          <Route exact path="/" component={Main} />
          <Route exact path="/lab" component={Lab} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
