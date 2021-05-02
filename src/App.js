import "./App.css";
import Button from "@material-ui/core/Button";
import Header from "./components/Header";
import Home from "./components/Home";
import Journey from "./components/Journey";
import Ideas from "./components/Ideas";
import Pics from "./components/Pics";
import Books from "./components/Books";
import Writings from "./components/Writings";
import Toolbar from "@material-ui/core/Toolbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px 60px 60px 40px",
    // margin: "20px"
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Router>
        <Header />

        <div className={classes.root}>
          <Switch>
            <Route path="/journey">
              <Journey />
            </Route>
            <Route path="/ideas">
              <Ideas />
            </Route>
            <Route path="/pics">
              <Pics />
            </Route>
            <Route path="/books">
              <Books />
            </Route>
            <Route path="/writings">
              <Writings />
            </Route>
            <Route path="/*">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
