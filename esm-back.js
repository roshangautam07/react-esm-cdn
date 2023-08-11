import React, { Suspense } from 'https://esm.sh/react?dev'
console.log(React)
import { createRoot } from "https://esm.sh/react-dom/client?dev";
//import Ro from "https://esm.sh/react-router-dom@6.0.2";
import ReactDOM from "https://esm.sh/react-dom@18.2.0";
import {
    HashRouter,
    Link,
    Route,
    Switch,
    useParams,
    useRouteMatch
} from "https://esm.sh/react-router-dom@5.2.0";

const App = () => {
    const [counter, setCounter] = React.useState(0);
    //increase counter
    const increase = () => {
        setCounter(count => count + 1);
    };

    //decrease counter
    const decrease = () => {
        setCounter(count => count - 1);
    };

    //reset counter 
    const reset = () => {
        setCounter(0)
    }
    return (
        <div onClick={increase} >
            <h1>Hello React! ⚛️ {counter}</h1>
            <p>Building user interfaces.</p>
            <Link to="/home">Goto Home</Link>
        </div>
    )
}
const Home = () => {
    return (
        <>
            <h3>This is home</h3>
            <Link to="/">Goto back</Link>
        </>

    )
}
const WebRouter = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path='/' exact component={App} />
                <Route path='/Home' component={Home} />
            </Switch>
        </HashRouter>
    );
}



