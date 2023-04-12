import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Test from "./pages/Test_Rotation";
import Gravity from "./pages/Gravity";
import Test_Fluid from "./pages/Test_Fluid";
const App = () => {

  return (
    <div style={{ display: "flex" }}>
      <Router>
          <Switch>
             <Route path="/test" component={Test} />
             <Route path="/fluid" component={Test_Fluid} />
             <Route exact path="/" component={Gravity} />
          </Switch>
      </Router>
    </div>
  );
};
export default App;
