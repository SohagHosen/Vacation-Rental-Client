import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { AppBar, Tabs, Tab } from "@mui/material";

import "./App.css";
import Home from "./pages/home/Home";
import MyNav from "./shared/nav/Nav";

function App() {
  return (
    <Router>
      <MyNav />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
