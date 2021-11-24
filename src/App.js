
import './App.css';
import HeaderComponents from "./components/Header.components";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div>
        <Router>
          <HeaderComponents/>

          <div className="container">
            <Switch>

            </Switch>
          </div>

        </Router>
    </div>
  );
}

export default App;
