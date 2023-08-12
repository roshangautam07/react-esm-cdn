import React, { Suspense } from "https://esm.sh/react?dev";
console.log(React);
import { createRoot } from "https://esm.sh/react-dom/client?dev";
//import Ro from "https://esm.sh/react-router-dom@6.0.2";
import ReactDOM from "https://esm.sh/react-dom@18.2.0";
import Homes from "./pages/home.js";
import { simplePopup } from "./components/popup.js";
import PostContainer from "./pages/post/index.js";
import {
  ErrorBoundary,
  withErrorBoundary,
} from "https://esm.sh/react-error-boundary@4.0.11";
import {
  HashRouter,
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "https://esm.sh/react-router-dom@5.2.0";
// import ErrorBoundary from "./ErrorBoundary.js";
window.React = React;
window.withErrorBoundary = withErrorBoundary;
window.Router = { HashRouter, Link, Route, Switch, useParams, useRouteMatch };
const App = () => {
  console.log(window);
  const [counter, setCounter] = React.useState(0);
  React.useEffect(() => {
    // simplePopup();
  }, []);
  //increase counter
  const popMeUp = () => {
    simplePopup();
  };
  const increase = () => {
    console.log(window);
    setCounter((count) => count + 1);
  };
  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  //reset counter
  const reset = () => {
    setCounter(0);
  };
  return (
    <div onClick={increase}>
      <h1>Hello React! ⚛️ {counter}</h1>
      <p>Building user interfaces.</p>
      <button type="button" onClick={simplePopup}>
        popMeUp
      </button>
      <Link to="/home">Goto Home</Link>
      <Link to="/post">Goto Post</Link>
    </div>
  );
};
const Home = () => {
  return (
    <div>
      <h3>This is home</h3>
      <Link to="/">Goto back</Link>
    </div>
  );
};
const WebRouter = () => {
  return (
    <HashRouter>
      <Switch>
        <ErrorBoundary fallback={<div>Error Occor...</div>}>
          <Route path="/" exact component={App} />
          <Route path="/Home" component={Homes} />
          <Route path="/post" component={PostContainer} />
        </ErrorBoundary>
      </Switch>
    </HashRouter>
  );
};

const root = createRoot(document.getElementById("react"));
root.render(<WebRouter />);
