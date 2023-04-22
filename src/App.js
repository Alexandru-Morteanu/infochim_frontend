import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Test from "./pages/Test_Rotation";
import T from "./pages/Graphic";
import Lab from "./pages/Lab";
import Main from "./pages/Main";
import Indicatori from "./pages/Indicatori";
import PH from "./pages/PH";
import Pas from "./pages/Pas";
const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <Router>
        <Switch>
          <Route path="/test" component={Test} />
          <Route exact path="/" component={Main} />
          <Route exact path="/indicatori" component={Indicatori} />
          <Route exact path="/ph" component={PH} />
          <Route exact path="/pascupas" component={Pas} />
          <Route exact path="/lab" component={Lab} />
          <Route exact path="/t" component={T} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
