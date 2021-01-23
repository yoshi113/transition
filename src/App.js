import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CSSTransition from "./pages/CSSTransition";
import TransitionGroup from "./pages/TransitionGroup";

function App() {
  return (
    <Router>
      <header>
        <Link to="/css-transition">CSSTransition</Link>
        <Link to="/transition-group">TransitionGroup</Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/css-transition">
            <CSSTransition />
          </Route>
          <Route exact path="/transition-group">
            <TransitionGroup />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
