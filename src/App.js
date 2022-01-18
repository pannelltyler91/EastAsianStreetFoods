import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import Success from './components/Success'
import Cancel from './components/Cancel'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/success" component={Success} />
        <Route path="/cancel" component={Cancel} />
      </Switch>
    </div>
  );
}

export default App;
