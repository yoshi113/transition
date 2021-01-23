import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CSSTransition from "./pages/CSSTransition";
import TransitionGroup from "./pages/TransitionGroup";
import TransitionGroup1 from "./pages/TransitionGroup1";

function App() {
  return (
    <Router>
      <header>
        <Link to="/css-transition">CSSTransition</Link>
        <Link to="/transition-group">TransitionGroup</Link>
        <Link to="/transition-group1">TransitionGroup1</Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/css-transition">
            <CSSTransition />
          </Route>
          <Route exact path="/transition-group">
            <TransitionGroup />
          </Route>
          <Route exact path="/transition-group1">
            <TransitionGroup1 />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
