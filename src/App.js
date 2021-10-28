import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import MyNav from "./shared/nav/Nav";
import Footer from "./shared/footer/Footer";
import AuthProvider from "./context/AuthProvider";
import Signin from "./pages/signin/Signin";

function App() {
  return (
    <AuthProvider>
      <Router>
        <MyNav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
