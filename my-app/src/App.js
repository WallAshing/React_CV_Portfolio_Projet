import Home from "./Pages/Home"
import CV from "./Pages/CV"
import Portfolio from "./Pages/Portfolio"
import About from "./Pages/About"
import NoMatch from "./Pages/NoMatch"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
   <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cv" component={CV} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/about" component={About} />
      <Route path="/*" component={NoMatch} />
    </Switch>
   </Router>
  );
}

export default App;
