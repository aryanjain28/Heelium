import './global.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Routes from "./Routes"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Routes} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
